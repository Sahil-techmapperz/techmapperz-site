import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Input,
  VStack,
  Button,
  extendTheme,
  ChakraProvider,
  CSSReset,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaUserAlt } from 'react-icons/fa';
import { TbMessageChatbot } from 'react-icons/tb';
import { BsFillChatDotsFill} from 'react-icons/bs';
import { AiOutlineCloseCircle} from 'react-icons/ai';
import axios from "axios";
import stringSimilarity from "string-similarity";
import nlp from "compromise";

const dataset = [
  {
    questions: ["What is your name?", "Who are you?"],
    keywords: ["name"],
    answers: ["My name is ChatGPT, your friendly chatbot!", "I'm ChatGPT, nice to meet you!"],
    similarityThreshold: 0.5,
  },
  {
    questions: ["How are you?", "How do you feel?"],
    keywords: ["how", "feel"],
    answers: [
      "I'm a chatbot, so I don't have feelings, but I'm here to help you!",
      "As a chatbot, I don't have emotions, but I'm always ready to assist you!",
    ],
    similarityThreshold: 0.5,
  },
  {
    questions: ["Hello?", "Hi", "hi", "hi?", "Hi?"],
    keywords: ["Hello", "Hi", "Hi how about you?", "How are you!",],
    answers: [
      "Hello", "Hi how about you?", "Hi",
      "How are you!",
    ],
    similarityThreshold: 0.5,
  },
  {
    questions: ["What time is it?", "Can you tell me the time?", "What's the time now?"],
    keywords: ["time"],
    answers: [getCurrentTime()],
    similarityThreshold: 0.5,
  },
  {
    questions: ["What is the capital of France?", "Where is Paris located?"],
    keywords: ["capital", "Paris"],
    answers: [
      "The capital of France is Paris.",
      "Paris is located in France and it is the capital of the country.",
    ],
    similarityThreshold: 0.5,
  },
  {
    questions: ["What is the purpose of life?", "What is the meaning of life?"],
    keywords: ["purpose", "meaning", "life"],
    answers: [
      "The purpose and meaning of life is a philosophical question that has been debated for centuries and there's no single answer to it. It's up to each individual to determine their own purpose and meaning.",
      "The purpose and meaning of life can vary greatly from person to person, and it's a question that has no definitive answer. Some find meaning through relationships, others through work, and still, others through personal beliefs and spirituality.",
    ],
    similarityThreshold: 0.5,
  },
  {
    questions: ["What is a chatbot?", "Can you explain what a chatbot is?"],
    keywords: ["chatbot"],
    answers: [
      "A chatbot is a computer program designed to simulate conversation with human users, especially over the Internet. They can be used for customer service, information gathering, and other purposes.",
      "A chatbot is a software application that is programmed to communicate with users in natural language. They can be used for a variety of purposes, including customer service, information retrieval, and entertainment.",
    ],
    similarityThreshold: 0.5,
  }
];



function getCurrentTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


const getGreeting = (name) => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return `Good morning! ${name} how may I help you`;
  } else if (currentHour >= 12 && currentHour < 18) {
    return `Good afternoon! ${name} how may I help you`;
  } else if (currentHour >= 18 && currentHour < 22) {
    return `Good evening! ${name} how may I help you`;
  } else {
    return "Hello!";
  }
};

const containsKeywords = (inputText, keywords) => {
  const words = nlp(inputText.toLowerCase()).out("array");
  const keywordSet = new Set(keywords.map((keyword) => nlp(keyword.toLowerCase()).out("array")[0]));

  return words.some((word) => keywordSet.has(word));
};

const calculateSimilarity = (text1, text2) => {
  return stringSimilarity.compareTwoStrings(text1, text2);
};



const isExactMatch = (inputText, questions) => {
  const normalizedInputText = normalizeText(inputText);
  return questions.some((question) => normalizeText(question) === normalizedInputText);
};



const normalizeText = (text) => {
  return text.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
};

const findBestMatchingAnswer = async (inputText,dataset) => {
  const normalizedInputText = normalizeText(inputText);
  let bestMatch = null;
  let maxSimilarity = -1;

  for (const item of dataset) {
    if (isExactMatch(normalizedInputText, item.questions)) {
      bestMatch = item;
      maxSimilarity = 1;
      break;
    }

    let itemMaxSimilarity = -1;
    for (const question of item.questions) {
      const normalizedQuestion = normalizeText(question);
      const similarity = calculateSimilarity(normalizedInputText, normalizedQuestion);

      if (similarity > itemMaxSimilarity) {
        itemMaxSimilarity = similarity;
      }
    }

    if (containsKeywords(normalizedInputText, item.keywords) || itemMaxSimilarity > maxSimilarity) {
      maxSimilarity = itemMaxSimilarity;
      bestMatch = item;
    }
  }

  if (bestMatch && maxSimilarity >= bestMatch.similarityThreshold) {
    if (bestMatch.answers == 'getCurrentTime') {
      return getCurrentTime();
    }
    const randomAnswerIndex = Math.floor(Math.random() * bestMatch.answers.length);
    return bestMatch.answers[randomAnswerIndex];
  }

  // await axios.post("http://localhost:8080/store_unanswered_question", {
  //   question: inputText,
  // });

  return "I'm sorry, I don't understand your question. For more information, please email us at info@techmapperz.com.";
};


function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const [user, setUser] = useState({ name: '', email: '' });
  const [showChatbot, setShowChatbot] = useState(false);
  const [show, setShow] = useState(false);
  const[dataset,setDataset] = useState([]);
  const[showsubmitbtn,setShowSubmitbtn] = useState(true);
  const intervalIdRef = useRef();

  const dataset2=async()=>{
    let res=await axios.get("http://localhost:8080/Chatbot")
    console.log(res.data)
    setDataset(res.data);
}

  const handleSubmituser = (event) => {
    event.preventDefault();
    setShowChatbot(true);
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
  dataset2();
    setMessages([{ text: getGreeting(user.name && user.name), sender: "chatbot" }]);
   
  }, [user.name]);

  useEffect(() => {
    scrollToBottom();
   
  }, [messages]);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputText = e.target.message.value;
    if (!inputText) return;

    // Add user's question to messages state
    setMessages((prev) => [...prev, { text: inputText, sender: "user" }]);
    setInputValue("");

    // Add an empty chatbot response to messages state
    setMessages((prev) => [...prev, { text: "", sender: "chatbot" }]);

    setIsTyping(true);
    const response = await findBestMatchingAnswer(inputText,dataset);
    setIsTyping(false);

    let charsToShow = 0;
    intervalIdRef.current = setInterval(() => {
      if (charsToShow >= response.length) {
        clearInterval(intervalIdRef.current);
        setShowSubmitbtn(true);
      } else {
        charsToShow++;
       
        // Update the last chatbot response in messages state with partial chatbot response
       setShowSubmitbtn(false)
        setMessages((prev) =>
          prev.slice(0, -1).concat([{ text: response.slice(0, charsToShow), sender: "chatbot" }])
        );
      }
    }, 100);
  };



const handaleshow=()=>{
    setShow(!show);
    setShowChatbot(false);
    setShowSubmitbtn(true);
    if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }

}


  return (
    <>
      <CSSReset />
      {!show&&
      <Box  cursor={"pointer"} onClick={handaleshow} fontSize={"4xl"}  w={"50px"}>
      <BsFillChatDotsFill/>
      </Box>}
      {show&&
      <Box
        w="500px"
        height="400px"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        backgroundColor="gray.50"
        mx="auto"
        my="8"
        p="4"
        overflowY="scroll"
        
      >

        {!showChatbot ?
          <form onSubmit={handleSubmituser}>
            <Text color={"black"} textDecoration={"underline"} fontWeight={"bold"} fontSize={"2xl"} textAlign={"center"}>Welcome to our chatbot</Text>
            <Box pt={"10px"} w={"60%"} margin="auto">
              <FormControl>
                <FormLabel color={"black"}  htmlFor="name">Name</FormLabel>
                <Input color={"black"}  required id="name" type="text" name="name" value={user.name} onChange={handleChange} placeholder="please enter your name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel  color={"black"} htmlFor="email">Email</FormLabel>
                <Input  color={"black"} required id="email" type="email" name="email" value={user.email} onChange={handleChange} placeholder="please enter your email" />
              </FormControl>
              <Button mt={4} colorScheme="blue" type="submit">Submit</Button>
              <Button mt={4} ml="2" colorScheme="red" onClick={handaleshow} >close</Button>
              </Box>
          </form> :

          <VStack spacing="4" align="stretch" height="100%">
            <Box flexGrow={1}  >
              {messages.map((message, index) => (
                <Box gap={"1rem"} key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
                  <Text
                    borderRadius="md"
                    p="2"
                    bgColor={message.sender === "user" ? "blue.500" : "gray.300"}
                    color={message.sender === "user" ? "white" : "black"}
                    mb={"20px"}
                    maxW="100%"
                  >
                    {message.sender === "user" ? (
                      <FaUserAlt boxSize="1.5em" mr="1" color="white" />
                    ) : (
                      <TbMessageChatbot boxSize="1.5em" mr="1" color="gray.600" />
                    )}
                    {message.text}
                  </Text>
                </Box>
              ))}
              {isTyping && (
                <Text alignSelf="flex-start" fontStyle="italic" color="gray.500">
                  Chatbot is typing...
                </Text>
              )}
              <div ref={messagesEndRef} />
            </Box>
            <Box>
              <form onSubmit={handleSubmit}>
                <Input
                  name="message"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={handleInputChange}
                  color={"black"}
                  required
                />
                <Button isDisabled={!showsubmitbtn && true} mt="2" mb={"5"} rightIcon={<TbMessageChatbot />} colorScheme="blue" type="submit">
                  Send
                </Button>
                <Button mt="2" mb={"5"} ml={"2"} colorScheme="red" onClick={handaleshow} >close</Button>
              </form>
            </Box>
          </VStack>
        }
      </Box>}
    </>
  );
}

export default Chatbot;

