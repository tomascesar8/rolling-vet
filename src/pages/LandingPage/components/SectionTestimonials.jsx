import { useEffect, useState } from "react";
import { Title } from "../../../components";
import getData from "../../../helpers/getData";
import { CardTestimonial } from "./CardTestimonial";

const SectionTestimonials = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData("/comments", setComments);
  }, []);

  return (
    <section className="container-box">
      <Title title="Testimonios de nuestros clientes" />
      <div className="d-flex flex-row justify-content-between gap-5">
        {comments.map((comment) => (
          <CardTestimonial
            key={comment._id}
            subject={comment.nombre}
            rol={comment.rol}
          >
            {comment.comentario}
          </CardTestimonial>
        ))}
      </div>
    </section>
  );
};

export default SectionTestimonials;
