import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.header`
  background: #0f52ba;
  width: 100vw;
  height: 101px;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 300;
    font-size: 20px;
  }

  h1 {
    font-weight: 600;
    font-size: 40px;
    color: #fff;
  }
`;

export const MotionButton = styled(motion.button)`
  background: #fff;
  width: 80px;
  height: 45px;
  border-radius: 8px;
  margin-top: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
