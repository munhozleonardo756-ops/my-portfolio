import {
  Container,
  Thumbnail,
  Title,
  Description,
  Skills,
  SkillTag,
  ViewButton,
} from "./styles";

const Card = ({ image, projectName, description, skills = [], link }) => {
  return (
    <Container as="a" href={link} target="_blank" rel="noreferrer noopener">
      {image && <Thumbnail src={image} alt={projectName} />}

      <Title>{projectName}</Title>

      <Description>{description}</Description>

      {skills.length > 0 && (
        <Skills>
          {skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </Skills>
      )}

      <ViewButton type="button">Ver projeto</ViewButton>
    </Container>
  );
};

export default Card;
