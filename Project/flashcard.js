class Card {
    constructor(term, definition) {
      this.term = term;
      this.definition = definition;
    }
  }
  
  const cards = [
    new Card(
      "Credit Management",
      "The process of assessing creditworthiness, setting credit limits, monitoring accounts receivable, and managing collections to minimize risk and ensure healthy cash flow."
    ),
    new Card(
      "Interest Rates",
      "The percentage charged on a loan or earned on an investment, which affects how quickly debt can grow."
    ),
    new Card(
      "Inflation",
      "The general increase in prices over time that can erode purchasing power and affect loan repayment costs."
    ),
    new Card(
      "Credit Rating System",
      "Agencies like Experian, Equifax, and TransUnion use financial data to generate credit reports and scores."
    ),
    new Card(
      "Credit Score",
      "A numerical representation (often 300–850) of a person’s creditworthiness based on their credit history, outstanding debt, payment patterns, etc."
    ),
    new Card(
      "Factors Influencing Credit Score",
      "Payment history, credit utilization ratio, length of credit history, new credit inquiries, and credit mix."
    ),
    new Card(
      "Late Payments",
      "Payments made after the due date; these can severely lower your credit score."
    ),
    new Card(
      "Good vs. Bad Debt",
      "Good debt (e.g., student loans, mortgages) is often an investment in the future, whereas bad debt (e.g., high-interest credit cards with only minimum payments) can trap you in a cycle of debt."
    ),
    new Card(
      "Choosing a Credit Card",
      "Compare factors such as annual fees, rewards, interest rates, and credit limits; for many, a “first” credit card should offer manageable limits and low fees."
    )
  ];
  
  let currentIndex = 0;
  let showingFront = true;
  
  function displayCard() {
    document.getElementById("front").innerText = cards[currentIndex].term;
    document.getElementById("back").innerText = cards[currentIndex].definition;
  
    const card = document.getElementById("card");
    if (showingFront) {
      card.classList.remove("flipped");
    } else {
      card.classList.add("flipped");
    }
  }
  
  
  
  function flash() {
    const card = document.getElementById("card");
    showingFront = !showingFront;
    card.classList.toggle("flipped");
  }
  
  
  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    displayCard(); // respects showingFront
  }
  
  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    displayCard(); // respects showingFront
  }

  
  
  // Initialize the first card
  window.onload = displayCard;
  