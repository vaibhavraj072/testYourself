const mongoose = require("mongoose");
const Question = require("./questionModel");
const connectDB = require("./db");

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data to prevent duplication
    await Question.deleteMany();
    console.log("Existing data cleared.");

    const sampleQuestions = [
      {
        class: "8",
        subject: "science",
        chapter: "1",
        questions: [
          {
            question: "Which of the following is a kharif crop?",
            options: ["Wheat", "Rice", "Gram", "Mustard"],
            answer: "Rice",
          },
          {
            question: "What is the process of loosening the soil called?",
            options: ["Irrigation", "Ploughing", "Harvesting", "Weeding"],
            answer: "Ploughing",
          },
          {
            question: "Which tool is used for sowing seeds?",
            options: ["Plough", "Seed drill", "Sickle", "Hoe"],
            answer: "Seed drill",
          },
          {
            question: "Which of these is an organic fertilizer?",
            options: ["Urea", "Manure", "Ammonium sulfate", "Potash"],
            answer: "Manure",
          },
          {
            question: "What is crop rotation?",
            options: [
              "Growing one crop in a year",
              "Growing two crops simultaneously",
              "Growing different crops in succession on the same field",
              "Growing only one type of crop continuously",
            ],
            answer: "Growing different crops in succession on the same field",
          },
          {
            question: "Which of the following is not an agricultural practice?",
            options: ["Storage", "Weeding", "Rearing", "Threshing"],
            answer: "Rearing",
          },
          {
            question: "What is the aim of irrigation?",
            options: [
              "To supply nutrients to plants",
              "To provide water to crops",
              "To protect crops from pests",
              "To increase soil fertility",
            ],
            answer: "To provide water to crops",
          },
          {
            question: "Which of these methods prevents water loss during irrigation?",
            options: ["Flooding", "Canal system", "Sprinkler system", "Manual watering"],
            answer: "Sprinkler system",
          },
          {
            question: "Which microorganism is used in composting?",
            options: ["Algae", "Fungi", "Protozoa", "None of these"],
            answer: "Fungi",
          },
          {
            question: "What is winnowing used for?",
            options: [
              "Removing husk from grains",
              "Cutting crops",
              "Loosening soil",
              "Watering crops",
            ],
            answer: "Removing husk from grains",
          },
          {
            question: "Leguminous plants help in fixing which gas from the atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
            answer: "Nitrogen",
          },
          {
            question: "What is the function of a combine harvester?",
            options: [
              "Only harvesting crops",
              "Only threshing grains",
              "Both harvesting and threshing",
              "Only ploughing",
            ],
            answer: "Both harvesting and threshing",
          },
          {
            question: "Which of these is a rabi crop?",
            options: ["Maize", "Wheat", "Rice", "Cotton"],
            answer: "Wheat",
          },
          {
            question: "Which method helps in water conservation in agriculture?",
            options: [
              "Flood irrigation",
              "Drip irrigation",
              "Canal irrigation",
              "None of these",
            ],
            answer: "Drip irrigation",
          },
          {
            question: "What is the primary function of a granary?",
            options: [
              "Irrigation of crops",
              "Storing harvested grains",
              "Preparing seeds",
              "Mixing fertilizers",
            ],
            answer: "Storing harvested grains",
          },
          {
            question: "What is the main source of nutrients for plants?",
            options: ["Air", "Soil", "Water", "Sunlight"],
            answer: "Soil",
          },
          {
            question: "Which of these is used for controlling pests?",
            options: ["Herbicides", "Pesticides", "Fungicides", "Insecticides"],
            answer: "Pesticides",
          },
          {
            question: "What is threshing?",
            options: [
              "Cutting crops from the field",
              "Separating grains from husk",
              "Removing weeds from the field",
              "Loosening the soil",
            ],
            answer: "Separating grains from husk",
          },
          {
            question: "Which type of irrigation is suitable for sandy soil?",
            options: [
              "Flood irrigation",
              "Drip irrigation",
              "Sprinkler irrigation",
              "Canal irrigation",
            ],
            answer: "Sprinkler irrigation",
          },
          {
            question: "What is the purpose of weeding?",
            options: [
              "To increase the soil fertility",
              "To protect crops from pests",
              "To remove unwanted plants",
              "To supply nutrients to crops",
            ],
            answer: "To remove unwanted plants",
          },
        ],
      },      
      {
        class: "8",
        subject: "science",
        chapter: "2",
        questions: [
          {
            question: "Which microorganism is used in the production of alcohol?",
            options: ["Virus", "Bacteria", "Fungi", "Protozoa"],
            answer: "Fungi",
          },
          {
            question: "Which disease is caused by protozoa?",
            options: ["Common cold", "Tuberculosis", "Malaria", "Dengue"],
            answer: "Malaria",
          },
          {
            question: "Which of the following is a viral disease?",
            options: ["Typhoid", "Hepatitis A", "Cholera", "Tuberculosis"],
            answer: "Hepatitis A",
          },
          {
            question: "Which microorganism is used in the production of antibiotics?",
            options: ["Algae", "Fungi", "Virus", "Protozoa"],
            answer: "Fungi",
          },
          {
            question: "Which microorganism causes bread to rise?",
            options: ["Bacteria", "Fungi", "Algae", "Protozoa"],
            answer: "Fungi",
          },
          {
            question: "Which disease is caused by a virus?",
            options: ["Malaria", "Tuberculosis", "AIDS", "Cholera"],
            answer: "AIDS",
          },
          {
            question: "What is the role of Rhizobium bacteria?",
            options: [
              "Decompose organic matter",
              "Fix nitrogen in soil",
              "Cause disease",
              "Produce alcohol",
            ],
            answer: "Fix nitrogen in soil",
          },
          {
            question: "Which of these is not a use of microorganisms?",
            options: [
              "Making curd",
              "Making antibiotics",
              "Breeding cattle",
              "Cleaning the environment",
            ],
            answer: "Breeding cattle",
          },
          {
            question: "What is fermentation?",
            options: [
              "Respiration without oxygen",
              "Respiration with oxygen",
              "Growth of microorganisms",
              "Killing microorganisms",
            ],
            answer: "Respiration without oxygen",
          },
          {
            question: "Which microorganism is used in the production of penicillin?",
            options: ["Penicillium", "Yeast", "Rhizobium", "Lactobacillus"],
            answer: "Penicillium",
          },
          {
            question: "Which microorganism is used in curd production?",
            options: ["Yeast", "Lactobacillus", "Rhizobium", "Virus"],
            answer: "Lactobacillus",
          },
          {
            question: "Which microorganism is responsible for causing tuberculosis?",
            options: ["Bacteria", "Virus", "Fungi", "Protozoa"],
            answer: "Bacteria",
          },
          {
            question: "Which microorganism is responsible for nitrogen fixation in soil?",
            options: ["Rhizobium", "Yeast", "Virus", "Fungi"],
            answer: "Rhizobium",
          },
          {
            question: "Which of these is a bacterial disease?",
            options: ["Cholera", "Dengue", "AIDS", "Influenza"],
            answer: "Cholera",
          },
          {
            question: "Which microorganism is used for baking bread?",
            options: ["Bacteria", "Yeast", "Virus", "Fungi"],
            answer: "Yeast",
          },
          {
            question: "Which microorganism is used for sewage treatment?",
            options: ["Protozoa", "Bacteria", "Fungi", "Virus"],
            answer: "Bacteria",
          },
          {
            question: "Which gas is produced during the fermentation process?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
            answer: "Carbon dioxide",
          },
          {
            question: "Which of the following is a harmful microorganism?",
            options: ["Penicillium", "Rhizobium", "E. coli", "Lactobacillus"],
            answer: "E. coli",
          },
          {
            question: "Which microorganism causes food poisoning?",
            options: ["Fungi", "Virus", "Bacteria", "Protozoa"],
            answer: "Bacteria",
          },
          {
            question: "Which microorganism is responsible for the disease anthrax?",
            options: ["Virus", "Bacteria", "Fungi", "Protozoa"],
            answer: "Bacteria",
          },
        ],
      },
    ];

    // Insert the sample data
    await Question.insertMany(sampleQuestions);
    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
};

seedData();
