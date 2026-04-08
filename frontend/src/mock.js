// Mock data for Koramangala Women's Clinic

export const clinicInfo = {
  name: "Koramangala Women's Clinic",
  phone: "+91 98457 55919",
  address: "851, 8th Cross Rd, Koramangala, Bengaluru, Karnataka",
  rating: 5.0,
  reviewCount: 324,
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" }
  ]
};

export const services = [
  {
    id: 1,
    title: "Gynecology",
    description: "Comprehensive gynecological care including preventive screenings, diagnosis, and treatment of women's health conditions.",
    icon: "stethoscope"
  },
  {
    id: 2,
    title: "Obstetrics",
    description: "Expert prenatal and postnatal care, ensuring a healthy and safe pregnancy journey for mother and baby.",
    icon: "baby"
  },
  {
    id: 3,
    title: "Fertility Care",
    description: "Specialized fertility consultations, assessments, and personalized treatment plans to support your family planning goals.",
    icon: "heart"
  },
  {
    id: 4,
    title: "Prenatal Care",
    description: "Complete prenatal monitoring, nutritional guidance, and medical support throughout your pregnancy.",
    icon: "activity"
  },
  {
    id: 5,
    title: "Ultrasound Services",
    description: "Advanced ultrasound imaging for accurate diagnosis and monitoring with state-of-the-art equipment.",
    icon: "scan"
  },
  {
    id: 6,
    title: "Women's Wellness",
    description: "Holistic wellness programs including health screenings, lifestyle counseling, and preventive care.",
    icon: "sparkles"
  }
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    qualification: "MBBS, MD (OBG)",
    specialization: "Obstetrics & Gynecology",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Anjali Menon",
    qualification: "MBBS, MS (OBG), DNB",
    specialization: "High-Risk Pregnancy & Fertility",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Dr. Sunitha Reddy",
    qualification: "MBBS, DGO",
    specialization: "Women's Health & Wellness",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Meera K.",
    rating: 5,
    text: "Exceptional care throughout my pregnancy. Dr. Sharma and the team made me feel safe and supported every step of the way.",
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Rashmi P.",
    rating: 5,
    text: "The clinic is clean, modern, and welcoming. The doctors are highly professional and genuinely caring. Highly recommended!",
    date: "3 months ago"
  },
  {
    id: 3,
    name: "Lakshmi S.",
    rating: 5,
    text: "Found the best gynecologist in Bangalore! The consultation was thorough and the staff is incredibly compassionate.",
    date: "1 month ago"
  },
  {
    id: 4,
    name: "Divya N.",
    rating: 5,
    text: "Professional, caring, and knowledgeable team. They take time to explain everything clearly and answer all questions patiently.",
    date: "4 months ago"
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "5★ Rated Care",
    description: "Perfect 5.0 rating from 324+ satisfied patients",
    icon: "star"
  },
  {
    id: 2,
    title: "Experienced Team",
    description: "Highly qualified doctors with decades of combined experience",
    icon: "award"
  },
  {
    id: 3,
    title: "Modern Facilities",
    description: "State-of-the-art equipment and comfortable environment",
    icon: "building"
  },
  {
    id: 4,
    title: "Comprehensive Care",
    description: "Complete range of women's health services under one roof",
    icon: "shield-check"
  }
];