import React from 'react';
import "./Services.css"

const GymExerciseCard = ({ image, title, content }) => {
  return (
    <div className="exercise-card">
      <img src={image} alt={title} className="exercise-image" />
      <h2 className="exercise-title">{title}</h2>
      <p className="exercise-content">{content}</p>
    </div>
  );
};

const Works = () => {
  return (
    <div>
    <div className="exercise-cards-container">
      <GymExerciseCard
        image="assets/images/imgs.jpg"
        title="Weightlifting"
        content="Weightlifting is a great way to build strength and muscle mass. It involves lifting weights in various forms such as barbells, dumbbells, or weight machines."
      />
      <GymExerciseCard
        image="assets/images/cardio.jpg"
        title="Cardio"
        content="Cardio exercises like running, cycling, or using the elliptical machine are effective for improving cardiovascular health and burning calories."
      />
      <GymExerciseCard
        image="assets/images/pushup.jpg"
        title="Push ups"
        content="Pushups focuses on strength, flexibility, and breathing to improve physical and mental well-being. It includes various poses and breathing exercises."
      />
      </div>
      <div className="exercise-cards-container">
      <GymExerciseCard
        image="assets/images/squats.jpg"
        title="Squats"
        content="A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent, the hip and knee joints flex while the ankle joint dorsiflexes."
      />
      <GymExerciseCard
        image="assets/images/pilates.jpg"
        title="pilates"
        content="Pilates is a system of exercises using special apparatus, designed to improve physical strength, flexibility, and posture and enhance mental awareness."
      />
      <GymExerciseCard
        image="assets/images/Pulldown.jpg"
        title="Pulldown"
        content="The pulldown exercise works the back muscles and is performed at a workstation with adjustable resistance, usually plates."
      />
     </div>
    </div>
  );
};

export default Works;
