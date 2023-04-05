import { Button } from "@/styles/Buttons";
import { Text } from "@/styles/Text";
import React from "react";
import { ModalContainer, ModalContent } from "./style";

const AboutMe = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button type="outline" onClick={openModal}>
        Sobre Mim
      </Button>
      {modalOpen && (
        <ModalContainer onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Text type="heading3" color={"brand1"} css={{ marginBottom: 14 }}>
              Sobre Mim
            </Text>
           
              <Text color={"grey2"} type={"body1"} css={{ marginBottom: 14 }} >
                E aí, galera! Meu nome é Kauan, e sou um desenvolvedor web
                full-stack apaixonado por tecnologia e por criar soluções que
                possam ajudar a melhorar a vida das pessoas. Sou especializado
                em linguagens como HTML, CSS, JavaScript e Python, e tenho
                experiência em desenvolvimento de front-end e back-end. Além
                disso, também tenho conhecimentos em frameworks como React
                e Node.js, o que me permite criar aplicações web modernas
                e eficientes.
              </Text>
             
              <Text color={"grey2"} type={"body1"} css={{ marginBottom: 14 }} > 
                Quando não estou trabalhando em algum projeto emocionante, você
                pode me encontrar experimentando novas tecnologias, jogando
                videogames ou desfrutando de uma boa comida com os amigos. Adoro
                desafios e estou sempre procurando maneiras de me aprimorar e
                aprender novas habilidades, por isso, estou sempre estudando e
                participando de eventos de tecnologia.
              </Text>
              
              <Text color={"grey2"} type={"body1"} css={{ marginBottom: 14 }} >
                Mas não é só de tecnologia que eu gosto! Também sou um grande fã
                de esportes, especialmente de futebol e basquete, e adoro
                assistir a jogos e partidas. Além disso, gosto de viajar e
                conhecer novas culturas, o que me inspira a criar soluções que
                atendam a necessidades globais e que possam beneficiar pessoas
                de diferentes partes do mundo.
              </Text>
              
              <Text color={"grey2"}  type={"body1"} css={{ marginBottom: 16 }}>
                Se você está procurando um desenvolvedor web que ama o que faz e
                está comprometido em fornecer soluções de alta qualidade, então
                eu sou o cara para você! Estou sempre disposto a ouvir suas
                ideias e necessidades, e trabalharei duro para transformá-las em
                realidade. Vamos trabalhar juntos para criar algo incrível!
              </Text>
           
            <Button type={"outline"} onClick={closeModal}>
              Close
            </Button>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default AboutMe;
