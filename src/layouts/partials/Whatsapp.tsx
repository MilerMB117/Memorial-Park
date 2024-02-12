"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";


export default function WhatsApp(){
  return(
    <FloatingWhatsApp
    phoneNumber="+50685520707"
    accountName="Memorial Park"
    statusMessage="Bienvenido!"
    chatMessage="Hola!, ¿En que podemos ayudarte?"
    avatar="/images/chat.png"
    allowEsc
    notification
    notificationSound
  />
  )
}
