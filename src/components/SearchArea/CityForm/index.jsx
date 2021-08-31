import React from 'react';
import styled from 'styled-components';

const CityForm = ({
    city,
    handleChange,
    handleSubmit,
    error,
}) => {
    return (
        <>
            <Wrapper>
                <Input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <Button type="button" onClick={handleSubmit}>Search</Button>
            </Wrapper>
            {
                error && <Error>{ error }</Error>
            }
        </>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 400px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: #000;
  width: 200px;
  padding: 12px 14px;
  outline: unset;
  border: 1px solid #bcc0bf;
  border-radius: 4px;
  margin-right: 0;
  margin-bottom: 8px;

  &:focus {
    border-color: #8b8e8d;
  }

  @media (min-width: 400px) {
    margin-right: 8px;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  padding: 12px 22px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: #93bf46;
  color: #fff;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02rem;
  border: 1px solid #93bf46;
  outline: none;
  cursor: pointer;
  transition: all 100ms ease 0s;
`;

const Error = styled.div`
  color: #E04C66;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export default CityForm;
