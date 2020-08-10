import React from "react";

import whatsappImg from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => (
  <article className="teacher-item">
    <header>
      <img src={teacher.avatar} alt={teacher.name} />
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
      </div>
    </header>
    <div>{teacher.bio}</div>
    <footer>
      <p>
        Preço/hora:
        <strong>R$ {teacher.cost}</strong>
      </p>
      <a href={`https://wa.me/55${teacher.whatsapp}`} target="blank">
        <img src={whatsappImg} alt="Whatsapp" />
        Entrar em contato
      </a>
    </footer>
  </article>
);

export default TeacherItem;
