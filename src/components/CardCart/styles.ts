import styled from "styled-components";

export const Container = styled.div`
  width: 385px;
  height: 101px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  padding: 5px;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100%;
  object-fit: contain;
`;

export const ContainerWrapper = styled.div`
  h2 {
    width: 113px;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    position: relative;
    left: -80px;
  }

  #remove {
    color: white;
    height: 18px;
    width: 18px;
    background: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -13px;
    margin-right: -2px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  h2 {
    width: 113px;
    font-size: 13px;
    line-height: 17px;
  }

  span {
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    color: #000;
  }
`;

export const Quantity = styled.div`
  position: absolute;
  right: 103px;
  align-items: center;
  border-radius: 4px;
  border: 0.001px solid rgba(0, 0, 0, 0.1);
  button.sub,
  .sum {
    font-size: 18px;
    padding: 3px;
    border: 0.001px solid rgba(0, 0, 0, 0.1);
  }

  #quantity {
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #000;
    padding: 5px;
  }
`;
