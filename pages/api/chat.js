// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    let botResponse = "I'm sorry, I'm not sure how to answer that. Could you try asking in a different way?";

    // Sanitize input and split into keywords
    const keywords = message.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);

    const hasAny = (keys) => keys.some(key => keywords.includes(key));

    if (hasAny(["hello", "hi", "hey"])) {
      botResponse = "Hi there! How can I help you today?";
    } else if (hasAny(["help", "support"])) {
      botResponse = "You can ask me about Sheriffapon's skills, projects, or how to get in touch with him.";
    } else if (hasAny(["who", "sheriff", "apon", "abdulraheem", "yourself", "you"])) {
        botResponse = `👋 Hi, I’m Sheriff Abdulraheem (Sheriff Apon) — a passionate Full-Stack Developer who helps individuals and small businesses bring their ideas online.\n\nI build modern, responsive, and high-performing websites tailored to your goals — whether you need a personal portfolio, a small business site, or a full-scale web application.\n\nMy mission is simple: to make professional web development accessible to everyone.\n\n💡 Let’s create something amazing together!`
    } else if (hasAny(["skill", "skills", "tech", "technologies"])) {
      botResponse = "Sheriffapon is a full-stack developer skilled in React, Node.js, Next.js, and many other modern web technologies.";
    } else if (hasAny(["project", "projects", "work", "portfolio"])) {
      botResponse = "You can see his projects in the 'Projects' section of this site. He also has more work on his GitHub profile!";
    } else if (hasAny(["phone", "number", "alternative"])) {
        botResponse = `Of course. Here are some other ways to reach Sheriffapon:\n\n**Phone:** 07017621514\n**Email:** abdulraheemafunsho6006@gmail.com`;
    } else if (hasAny(["contact", "email", "reach", "social"])) {
      botResponse = "The best way to contact Sheriffapon is through the contact form on this website or via the social media links in the footer.";
    } else if (hasAny(["purpose", "about", "intellect", "point", "showcase", "why", "website", "site"])) {
      botResponse = `Sheriffapon is a personal portfolio and service hub created by Sheriff Abdulraheem, a passionate full-stack developer dedicated to helping individuals and small businesses bring their online ideas to life.\n\nThis website showcases Sheriffapon’s skills, featured projects, and creative approach to web development — from responsive front-end design to powerful back-end systems.\n\nBeyond serving as a personal portfolio, the goal of this website is to help the general public build modern, functional, and affordable websites for personal brands, small enterprises, or creative ventures.\n\nVisitors can explore projects, learn more about Sheriffapon’s process, and easily contact him for collaborations or custom web solutions through the integrated message form or via social media links (GitHub, X, Instagram, LinkedIn).`;
    }

    res.status(200).json({ reply: botResponse });

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
