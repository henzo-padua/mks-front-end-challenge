import styled from "styled-components";
import { motion } from "framer-motion";

export const Aside = styled(motion.aside)`
  background: #0f52ba;
  width: 486px;
  height: 100vh;
  padding: 50px;
  opacity: 1;
  position: fixed;
  top: 0px;
  right: 0px;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 0px 5px;
  z-index: 1000;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
    &.cardWrapper {
      gap: 10px;
    }
    h2.title {
      color: rgb(255, 255, 255);
      font-size: 27px;
      line-height: 32.91px;
      font-weight: 700;
      margin-right: 140px;
      width: 180px;
      height: 56px;
    }

    button#closebutton {
      width: 38px;
      height: 38px;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      text-align: center;
      font-size: 28px;
      font-weight: 400;
      color: rgb(255, 255, 255);
    }

    h3 {
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      color: #fff;
    }

    #price-aside {
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      color: #fff;
    }
  }
`;

export const ButtonCart = styled.button`
  width: 100%;
  height: 97px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #fff;
  align-self: flex-end;
  margin-top: 20px;
  border-radius: 5px;
`;
