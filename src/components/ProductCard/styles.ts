import styled from "styled-components";

export const Container = styled.div`
  width: 217.56px;
  height: 285px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.133) 0px 2px 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Image = styled.img`
  color: transparent;
  padding: 5px;
  margin-top: 10px;
  width: 111px;
  aspect-ratio: auto 111 / 118;
  height: 118px;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  h2 {
    color: #2c2c2c;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
  }

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 15px;
    background: #373737;
    color: #fff;
    border-radius: 10px;
    padding: 5px;
  }
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  align-self: flex-start;
  margin-left: 14px;
  height: 5px;
`;

export const Button = styled.button`
  background: #0f52ba;
  color: #fff;
  width: 100%;
  height: 33px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0px 0px 8px 8px;
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
`;
