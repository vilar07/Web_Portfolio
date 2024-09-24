import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextRotator = ({ words = [], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000, className = "" }) => {
  const [index, setIndex] = useState(0); // Controla qual palavra está sendo exibida
  const [subIndex, setSubIndex] = useState(0); // Controla o índice de letras
  const [isDeleting, setIsDeleting] = useState(false); // Controla se estamos apagando
  const [blink, setBlink] = useState(true); // Controla o traço piscante
  const [pause, setPause] = useState(false); // Controla a pausa entre palavras

  const fullText = words[index];

  // Efeito de digitação/apagamento
  useEffect(() => {
    if (pause) return; // Pausa quando troca de palavra
    
    const handleTyping = () => {
      if (!isDeleting && subIndex === fullText.length) {
        // Pausa após terminar de escrever a palavra
        setPause(true);
        setTimeout(() => {
          setIsDeleting(true);
          setPause(false);
        }, pauseTime);
      } else if (isDeleting && subIndex === 0) {
        // Move para a próxima palavra quando terminar de apagar
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        // Atualiza o subIndex (escrevendo ou apagando)
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    };

    const interval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(interval);
  }, [subIndex, isDeleting, pause, words, index, fullText.length, typingSpeed, deletingSpeed, pauseTime]);

  // Efeito do cursor piscante
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ display: "inline-block" }}
    >
      My name is Tiago and I am a {fullText.substring(0, subIndex)}
      {blink && <span>|</span>} {/* Cursor piscando */}
    </motion.div>
  );
};

export default TextRotator;
