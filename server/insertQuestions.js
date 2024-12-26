const mongoose = require("mongoose");
const Question = require("./question.js");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const questions = [
        {
          text: "What is reproduction?",
          options: ["Process of growth", "Process of respiration", "Process of producing offspring", "Process of digestion"],
          answer: "Process of producing offspring",
          category: "Biology"
        },
        {
          text: "Which type of reproduction involves only one parent?",
          options: ["Sexual reproduction", "Asexual reproduction", "Internal reproduction", "External reproduction"],
          answer: "Asexual reproduction",
          category: "Biology"
        },
        {
          text: "What is the male gamete called?",
          options: ["Ovum", "Embryo", "Sperm", "Zygote"],
          answer: "Sperm",
          category: "Biology"
        },
        {
          text: "The union of a male gamete and a female gamete is called:",
          options: ["Fertilization", "Budding", "Pollination", "Fragmentation"],
          answer: "Fertilization",
          category: "Biology"
        },
        {
          text: "Fertilization occurs in which part of the human female reproductive system?",
          options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
          answer: "Fallopian tube",
          category: "Biology"
        },
        {
          text: "Which of these is an example of an organism that reproduces by budding?",
          options: ["Amoeba", "Hydra", "Earthworm", "Human"],
          answer: "Hydra",
          category: "Biology"
        },
        {
          text: "What is the process of splitting of the zygote into many cells called?",
          options: ["Budding", "Cleavage", "Pollination", "Fragmentation"],
          answer: "Cleavage",
          category: "Biology"
        },
        {
          text: "Which of the following organisms reproduce through external fertilization?",
          options: ["Frogs", "Humans", "Birds", "Elephants"],
          answer: "Frogs",
          category: "Biology"
        },
        {
          text: "What is the function of the placenta in mammals?",
          options: ["Nourishes the embryo", "Helps in fertilization", "Produces gametes", "Causes division of cells"],
          answer: "Nourishes the embryo",
          category: "Biology"
        },
        {
          text: "Binary fission is commonly seen in which organism?",
          options: ["Amoeba", "Hydra", "Frog", "Earthworm"],
          answer: "Amoeba",
          category: "Biology"
        },
        {
          text: "In sexual reproduction, the zygote develops into:",
          options: ["An ovum", "A gamete", "An embryo", "A sperm"],
          answer: "An embryo",
          category: "Biology"
        },
        {
          text: "Which of the following is a viviparous animal?",
          options: ["Frog", "Fish", "Hen", "Human"],
          answer: "Human",
          category: "Biology"
        },
        {
          text: "Which term is used for animals that lay eggs?",
          options: ["Oviparous", "Viviparous", "Carnivorous", "Herbivorous"],
          answer: "Oviparous",
          category: "Biology"
        },
        {
          text: "What type of reproduction is seen in sponges?",
          options: ["Budding", "Fragmentation", "Binary fission", "Sexual reproduction"],
          answer: "Fragmentation",
          category: "Biology"
        },
        {
          text: "What is the name of the cell formed after fertilization?",
          options: ["Ovum", "Embryo", "Zygote", "Gamete"],
          answer: "Zygote",
          category: "Biology"
        },
        {
          text: "The transfer of male gametes to female gametes in sexual reproduction is called:",
          options: ["Pollination", "Fertilization", "Copulation", "Insemination"],
          answer: "Copulation",
          category: "Biology"
        },
        {
          text: "What is the reproductive organ of the male human body?",
          options: ["Ovary", "Testis", "Uterus", "Fallopian tube"],
          answer: "Testis",
          category: "Biology"
        },
        {
          text: "Which organism reproduces by fragmentation?",
          options: ["Amoeba", "Planaria", "Hydra", "Paramecium"],
          answer: "Planaria",
          category: "Biology"
        },
        {
          text: "Which part of the human reproductive system produces eggs?",
          options: ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
          answer: "Ovary",
          category: "Biology"
        },
        {
          text: "Internal fertilization occurs in which of the following?",
          options: ["Fish", "Frog", "Bird", "Starfish"],
          answer: "Bird",
          category: "Biology"
        }
      ];
    await Question.insertMany(questions);
    console.log("Questions inserted");
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
