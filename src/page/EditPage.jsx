import {
  Alert,
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../config/FirebaseConfig";
import {
  accra,
  bolgatanga,
  capeCoast,
  dambai,
  damongo,
  goaso,
  hoT,
  koforidua,
  kumasi,
  nalerigu,
  sunyani,
  takoradi,
  tamale,
  techiman,
  waT,
  wiawso,
} from "../config/regionData";

const EditPage = ({ TicketData }) => {
  const [ticketFormData, setTicketFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    destination: "",
    departure: "",
    timing: "",
    luggage: "",
    ticketAmount: 1,
    date: 0,
  });
  // console.log(ticketFormData)

  const [getId, setGetId] = useState(TicketData);

  const [totalAmount, setTotalAmount] = useState(0);
  const [showError, setShowError] = useState("");
  const { autoID } = useParams();
  const [seatNumber, setSeatNumber] = useState('')
  const [carNumber, setCarNumber] = useState('')
  let navigate = useNavigate();

  const computingForPrice = () => {
    if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //Sunyani to ******************************
    else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //techiman *******************************************
    else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // goaso *******************************************
    else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///capeCoast**************************
    else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///koforidua*******************************************
    else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///accra***********************************************
    else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///tamale***************************************
    else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //damongo*************************************************
    else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // nalerigu**************************************************
    else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //// bolgatanga**************************************
    else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //// Wa ************************************************
    else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // ho **********************************************
    else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    /// dambai *************************************
    else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // takoradi *************************************************
    else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // wiawso *****************************************
    else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }
  };

  useEffect(() => {
    computingForPrice();
    // checkDate()
    //d.getDate()
  }, [
    ticketFormData.departure,
    ticketFormData.destination,
    ticketFormData.ticketAmount,
  ]);

  const navigateBack = () => {
    navigate(-1);
  };

  const handleTacketFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setTicketFormData((prevFromData) => {
      return {
        ...prevFromData,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const getDataTicket = TicketData.filter((tb) => tb.autoID === autoID).map(
    (tb, index) => {

      console.log(ticketFormData);
      console.log(totalAmount);
      // console.log(tb.id)

      const updateOn = async (event) => {
        event.preventDefault();

        try {
          if (
            ticketFormData.firstName === "" ||
            ticketFormData.lastName === "" ||
            ticketFormData.phoneNumber === "" ||
            ticketFormData.destination === "" ||
            ticketFormData.departure === "" ||
            ticketFormData.timing === "" ||
            ticketFormData.date === 0 ||
            ticketFormData.ticketAmount === 0 ||
            ticketFormData.luggage === ""
          ) {
            setShowError("Please Make Sure to Fill the Forms");
          } else {
            // let serial = Math.floor(Math.random() * 10000000000) + 1;
            const updateTicket = doc(db, "tickets", tb.id);

            const docRef = await updateDoc(updateTicket, {
              ticketFormData,
              payment: totalAmount,
              timeStamp: serverTimestamp(),
            });
          }

          console.log(ticketFormData);
        } catch (error) {
          console.log(error);
        }
      };


      const updateSeatAndCarNumber = async () => {
        if(seatNumber === "" || carNumber === "") {
          alert("Seat and Car Number have not been Added")
        } else {
          const updateTicket = doc(db, "tickets", tb.id);

            const docRef = await updateDoc(updateTicket, {
              seatNumber: seatNumber,
              carNumber: carNumber,
              timeStamp: serverTimestamp(),
            });

            alert("Updated")
        }
      }
      return (
        <div key={index}>
          <Box p={5} shadow="md" borderWidth="1px" mb={10}>
            <Text p={2} fontSize="md" as="b">
              Name: {tb.ticketFormData.firstName}
            </Text>
            <Text p={2} fontSize="md" as="b">
              {tb.ticketFormData.lastName}
            </Text>
            <Text p={2} fontSize="md" as="b">
              Phone No.:{tb.ticketFormData.phoneNumber}
            </Text>
            <Text p={2} fontSize="md" as="b">
              From {tb.ticketFormData.departure}
            </Text>
            <Text p={2} fontSize="md" as="b">
              To {tb.ticketFormData.destination}
            </Text>
            <Text p={2} fontSize="md" as="b">
              Leaving Time: {tb.ticketFormData.timing}
            </Text>
            <Text p={2} fontSize="md" as="b">
              Date: {tb.ticketFormData.date}
            </Text>
            <Text p={2} fontSize="md" as="b">
              Ticket ID: {tb.autoID}
            </Text>
          </Box>



          <Flex>
          <Box p={5} shadow="md" borderWidth="1px" mb={10}>
            <Input placeholder="Seat Number" onChange={(e)=> {setSeatNumber(e.target.value)}}/>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" mb={10}>
            <Input placeholder="Car Number" onChange={(e)=> {setCarNumber(e.target.value)}}/>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" mb={10}>
            <Button colorScheme="green" onClick={updateSeatAndCarNumber}>Add seat and car Number </Button>
          </Box>
          </Flex>


          <Flex>
            <Box m={2}>
              <Select
                name="departure"
                id="departure"
                value={ticketFormData.departure}
                onChange={handleTacketFormChange}
              >
                <option value="">Place of departure</option>
                <option value={kumasi}>Kumasi</option>
                <option value={sunyani}>Sunyani</option>
                <option value={techiman}>Techiman</option>
                <option value={goaso}>Goaso</option>
                <option value={capeCoast}>Cape Coast</option>
                <option value={koforidua}>Koforidua</option>
                <option value={accra}>Accra</option>
                <option value={tamale}>Tamale</option>
                <option value={damongo}>Damongo</option>
                <option value={nalerigu}>Nalerigu</option>
                <option value={bolgatanga}>Bolgatanga</option>
                <option value={waT}>Wa</option>
                <option value={hoT}>Ho</option>
                <option value={dambai}>Dambai</option>
                <option value={takoradi}>Takoradi</option>
                <option value={wiawso}>Wiawso</option>
              </Select>
            </Box>
            <Box m={2}>
              <Select
                name="destination"
                id="destination"
                value={ticketFormData.destination}
                onChange={handleTacketFormChange}
                className="select__destination form__input__select"
              >
                <option value="">Place of destination</option>
                <option value={kumasi}>Kumasi</option>
                <option value={sunyani}>Sunyani</option>
                <option value={techiman}>Techiman</option>
                <option value={goaso}>Goaso</option>
                <option value={capeCoast}>Cape Coast</option>
                <option value={koforidua}>Koforidua</option>
                <option value={accra}>Accra</option>
                <option value={tamale}>Tamale</option>
                <option value={damongo}>Damongo</option>
                <option value={nalerigu}>Nalerigu</option>
                <option value={bolgatanga}>Bolgatanga</option>
                <option value={waT}>Wa</option>
                <option value={hoT}>Ho</option>
                <option value={dambai}>Dambai</option>
                <option value={takoradi}>Takoradi</option>
                <option value={wiawso}>Wiawso</option>
              </Select>
            </Box>

            <Box m={2}>
              <Input
                type="date"
                name="date"
                value={ticketFormData.date}
                onChange={handleTacketFormChange}
                required
                true
              />
            </Box>
          </Flex>

          <Box m={5}>
            <FormLabel htmlFor="firstName">
              Please Enter Your First Name
            </FormLabel>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              value={ticketFormData.firstName}
              onChange={handleTacketFormChange}
              placeholder="First Name"
              required
            />
            <FormLabel htmlFor="lastName">
              Please Enter Your Last Name
            </FormLabel>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={ticketFormData.lastName}
              onChange={handleTacketFormChange}
              required
            />

            <FormLabel htmlFor="phoneNumber">
              Please Enter Your Phone Number
            </FormLabel>
            <Input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={ticketFormData.phoneNumber}
              onChange={handleTacketFormChange}
              required
            />
          </Box>
          <Box m={10}>
            <div>
              <fieldset>
                <Box m={2}>Take Oof Time</Box>
                <input
                  type="radio"
                  id="morning"
                  name="timing"
                  value="Morning at 10:30 am"
                  checked={ticketFormData.timing === "Morning at 10:30 am"}
                  onChange={handleTacketFormChange}
                  required
                />
                <label htmlFor="morning">Morning at 10:30 am</label>
                <br />
                <input
                  type="radio"
                  id="afternoon"
                  name="timing"
                  value="Afternoon at 1:30 pm"
                  checked={ticketFormData.timing === "Afternoon at 1:30 pm"}
                  onChange={handleTacketFormChange}
                  required
                  true
                />
                <label htmlFor="afternoon">Afternoon at 12:30 pm</label>
                <br />
                <input
                  type="radio"
                  id="evening"
                  name="timing"
                  value="Evening at 8:30 pm"
                  checked={ticketFormData.timing === "Evening at 8:30 pm"}
                  onChange={handleTacketFormChange}
                  required
                  true
                />
                <label htmlFor="evening">Evening at 8:30 pm</label>
              </fieldset>
            </div>

            <div>
              <fieldset>
                <Box m={2}>Do You Have Luggages? </Box>
                <input
                  type="radio"
                  id="yes"
                  name="luggage"
                  value="Yes"
                  checked={ticketFormData.luggage === "Yes"}
                  onChange={handleTacketFormChange}
                  required
                />
                <label htmlFor="yes">Yes</label>
                <br />
                <input
                  type="radio"
                  id="no"
                  name="luggage"
                  value="No"
                  checked={ticketFormData.luggage === "No"}
                  onChange={handleTacketFormChange}
                  required
                  true
                />
                <label htmlFor="no">No</label>
              </fieldset>
            </div>

            <FormLabel htmlFor="ticketAmount">
              Please Enter Number OF Ticket Needed
            </FormLabel>
            <Input
              min="1"
              max="20"
              type="number"
              name="ticketAmount"
              id="ticketAmount"
              placeholder="Enter Number OF Ticket (Max of 20)"
              value={ticketFormData.ticketAmount}
              onChange={handleTacketFormChange}
              required
              true
            />
          </Box>
          <Box ml={10}>
            <Text fontSize="4xl">GH{totalAmount}</Text>
          </Box>
          <Flex>
            <Box m={10}>
              <Button onClick={updateOn} colorScheme="green">
                Update
              </Button>
            </Box>
            <Box m={10}>
              <Button
                onClick={navigateBack}
                colorScheme="red"
                variant="outline"
              >
                Cancel
              </Button>
            </Box>
          </Flex>
        </div>
      );
    }
  );

  return (
    <>
      <Box p={5} shadow="md" borderWidth="1px" mb={5}>
        <Text fontSize="xl" as="b">
          Edit Ticket
        </Text>
      </Box>
      {getDataTicket}
    </>
  );
};

export default EditPage;
