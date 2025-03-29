"use client"

export interface Club {
    slug: string;
    name: string;
    description: string;
    image?: string;
    verified: boolean;
    lastUpdated?: string;
    categories?: string[];
}

export interface ClubCategory {
    name: string;
    color: string;
}

export const clubCategories = [
    {
        name: "Outdoor",
        color: "bg-green-500",
    }
    ,
    {
        name: "Literature",
        color: "bg-blue-500",
    },
    {
        name: "Technology",
        color: "bg-purple-500",
    },
    {
        name: "Health & Fitness",
        color: "bg-red-500",
    },
    {
        name: "Arts & Crafts",
        color: "bg-yellow-500",
    },
    {
        name: "Music & Entertainment",
        color: "bg-pink-500",
    },
    {
        name: "Gaming",
        color: "bg-orange-500",
    },
    {
        name: "Photography",
        color: "bg-teal-500",
    }
]


export const clubs: Club[] = [
    {
        slug: "adventure-club",
        name: "Adventure Club",
        description: "Join the Adventure Club to explore the great outdoors, from hiking scenic trails to camping under the stars. Perfect for thrill-seekers and nature lovers alike!",
        image: "https://picsum.photos/400/300?random=1",
        verified: true,
        lastUpdated: "2023-10-01",
        categories: ["Outdoor"],
    },
    {
        slug: "book-club",
        name: "Book Club",
        description: "Dive into the world of literature with the Book Club. Share your favorite reads, discuss thought-provoking stories, and connect with fellow book enthusiasts.",
        verified: false,
        categories: ["Literature"],
    },
    {
        slug: "tech-club",
        name: "Tech Club",
        description: "Stay ahead of the curve with the Tech Club. Explore the latest trends in technology, collaborate on innovative projects, and network with tech enthusiasts.",
        image: "https://picsum.photos/400/300?random=2",
        verified: true,
        lastUpdated: "2023-09-15",
        categories: ["Technology"],
    },
    {
        slug: "fitness-club",
        name: "Fitness Club",
        description: "Achieve your fitness goals with the Fitness Club. From group workouts to wellness tips, this club is all about staying active and healthy together.",
        verified: false,
        categories: ["Health & Fitness"],
    },
    {
        slug: "art-club",
        name: "Art Club",
        description: "Unleash your creativity in the Art Club. Whether you love painting, drawing, or digital design, this is the perfect space to express yourself and collaborate with others.",
        verified: true,
        lastUpdated: "2023-08-20",
        categories: ["Arts & Crafts"],
    },
    {
        slug: "music-club",
        name: "Music Club",
        description: "Celebrate the joy of music with the Music Club. Whether you're a musician or a music lover, join us for jam sessions, concerts, and music appreciation events.",
        image: "https://picsum.photos/400/300?random=3",
        verified: true,
        lastUpdated: "2023-09-25",
        categories: ["Music & Entertainment"],
    },
    {
        slug: "gaming-club",
        name: "Gaming Club",
        description: "Level up your gaming experience with the Gaming Club. From casual gaming nights to competitive tournaments, this club is for gamers of all kinds.",
        image: "https://picsum.photos/400/300?random=4",
        verified: false,
        categories: ["Gaming"],
    },
    {
        slug: "photography-club",
        name: "Photography Club",
        description: "Capture the world through your lens with the Photography Club. Share tips, showcase your work, and explore the art of photography together.",
        image: "https://picsum.photos/400/300?random=5",
        verified: true,
        lastUpdated: "2023-10-05",
        categories: ["Photography"],
    },
    {
        slug: "cooking-club",
        name: "Cooking Club",
        description: "Discover the joy of cooking with the Cooking Club. Share recipes, learn new techniques, and bond over delicious meals.",
        verified: false,
        categories: ["Arts & Crafts"],
    },
    {
        slug: "science-club",
        name: "Science Club",
        description: "Fuel your curiosity with the Science Club. Dive into experiments, discussions, and discoveries that make science exciting and fun.",
        image: "https://picsum.photos/400/300?random=6",
        verified: true,
        lastUpdated: "2023-09-10",
        categories: ["Technology"],
    },
];

export function getClubBySlug(slug: string) {
    return clubs.find((club) => club.slug === slug);
}