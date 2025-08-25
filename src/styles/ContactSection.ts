import styled from "styled-components";
import { fadeInUp } from "./CommonStyles";

// Contact 섹션 스타일
export const ContactContainer = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  text-align: start;
  font-size: 1rem;
  font-weight: 600;
  color: #e2e8f0;
  padding-left: 10px;
`;

export const FormInput = styled.input`
  width: 600px;
  padding: 1rem;
  border: 2px solid rgba(56, 189, 248, 0.2);
  border-radius: 12px;
  background: rgba(56, 189, 248, 0.05);
  color: #e2e8f0;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: rgba(56, 189, 248, 0.6);
    background: rgba(56, 189, 248, 0.1);
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 2px solid rgba(56, 189, 248, 0.2);
  border-radius: 12px;
  background: rgba(56, 189, 248, 0.05);
  color: #e2e8f0;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: rgba(56, 189, 248, 0.6);
    background: rgba(56, 189, 248, 0.1);
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.3);
  }
`;

export const ContactInfoSection = styled.div`
  animation: ${fadeInUp} 1s ease-out 0.8s both;
`;

export const ContactInfo = styled.div`
  font-size: 1.1rem;
  line-height: 2;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.1);
    transform: translateX(10px);
  }
`;

export const ContactLabel = styled.span`
  font-weight: bold;
  width: 80px;
  color: #38bdf8;
`;

export const ContactLink = styled.a`
  color: #38bdf8;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #0ea5e9;
    text-decoration: underline;
  }
`;
