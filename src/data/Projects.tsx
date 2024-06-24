export interface Project {
    title: string;
    image: string;
    description: string;
    technologies: string;
    moreInfo: string;
    repository: string;
    status: string;
    site?: string;
}

export const projectsFullStack: Project[] = [
    {
        title: "NetXoes",
        image: "./Projects/NetXoes.png",
        description:
            "This project was a Fullstack website to showcase products, favorite, add to cart and view order history.",
        technologies:
            "Frontend: React, TypeScript, Redux, Material-UI, Axios \n\n Backend: Node.js, JavaScript, Express, PrismaORM, PostgreSQL, Docker",
        moreInfo:
            "Implemented Features\n\nUser Authentication: Users can register, log in, and manage their accounts.\nProduct: Both users and non-users can view products, navigate, filter, and see product details.\nFavorite: Only users can favorite products and manage them on a specific page.\nCart: Can add the product to the cart, and see the resume product, add, decrease the quantity, and delete the products.\nOrder: Users can view the order history.",
        repository: "https://github.com/Colledev/Hackathon-DB1-NetXoes",
        status: "Completed",
        site: "https://hackathon-db1-netxoes.vercel.app/",
    },
    {
        title: "SpeedMeal",
        image: "./Projects/Speedyymeal.png",
        description: "This is a project focusing on oAuth and Profile edit.",
        technologies:
            "Frontend: React, TypeScript, Shadcn-ui \n\n Backend: Node.js, Typescript, Express, mongodb",
        moreInfo:
            "User Authentication: Users can register, log in, edit user profile, using oAuth security/jwt.",
        repository: "https://github.com/Colledev/SpeedMeal",
        status: "Completed",
    },
    {
        title: "Spotify API",
        image: "./Projects/SpotifyAPI.jpg",
        description:
            "Project focusing on authentication using the Spotify API to fetch user data such as playlists, profile, and playlist recommendations.",
        technologies:
            "React, Javascript, Spotify API, Axios, TailwindCSS, Express, Node.js",
        moreInfo:
            "Features\nAuthentication: Users can log in with their Spotify accounts to authenticate and authorize access to their account data.\nProfile Information: View user profile details such as display name, email, and profile picture.\nPlaylist Management: Browse through playlists, view details, and interact with playlist data.\nRecommendations: Receive personalized playlist recommendations based on listening history and preferences.",
        repository: "https://github.com/Colledev/Spotify-API",
        status: "In progress",
    },
    {
        title: "Clone Ifood",
        image: "./Projects/fsw-ifood-2.png",
        description: "Project to clone some Ifood features",
        technologies:
            "React, Typescript, PostgreSQL, Tailwind, Next.js and Shadcn",
        moreInfo:
            "Implemented Features\n\nUser Authentication: Users can register, log in, and manage their accounts.\nProduct: Any user can view product, navigate and goes to specifc restaurant.\nOrder: Users can order food.\nRestaurant: Users can view the restaurant and the products.",
        repository: "https://github.com/Colledev/Clone-Ifood",
        status: "In progress",
    },
    {
        title: "System Financial",
        image: "./Projects/System-Financial.png",
        description:
            "Project to manage financial transactions, generate invoices and bills for companies",
        technologies:
            "Node.js, Javascript, React, PrismaORM, PostgreSQL, Docker",
        moreInfo:
            "Implemented Features\n\nJWT Authentication: Implementation of JWT-based authentication with endpoints for user registration, login.\nManage: Complete CRUD operations to manage clients, with endpoints for creating, listing, updating, and deleting budgets for determined client.\n",
        repository: "https://github.com/Colledev/System-Financial/tree/main",
        status: "In progress",
    },
];

export const projectsBackend: Project[] = [
    {
        title: "Movie Catalog API",
        image: "./Projects/Movie-Catalog-API.png",
        description: "Project authentication JWT and CRUD for a film catalog",
        technologies:
            "Node.js, TypeScript, NestJS, TypeORM, PostgreSQL, Swagger, Docker, Redis",
        moreInfo:
            "Implemented Features\n\nJWT Authentication: Implementation of JWT-based authentication with endpoints for user registration, login, and profile update.\nMovies CRUD: Complete CRUD operations to manage movies, with endpoints for creating, listing, updating, and deleting movies.\nData Validation: Validation of incoming data on endpoints to ensure data integrity and consistency.\nSwagger: Automatic API documentation using Swagger to facilitate understanding and consumption of the API.",
        repository: "https://github.com/Colledev/Movie-Catalog-API-backend",
        status: "Completed",
    },
    {
        title: "oAuth-Javascript",
        image: "./Projects/oAuth-Google.png",
        description: "Project to authenticate with Google using oAuth Passport",
        technologies: "Node.js, JavaScript, Express, Passport, React, Tailwind",
        moreInfo:
            "Implemented Features\n\noAuth Authentication: Users can log in with their Google accounts to authenticate and authorize access to their account data.\nProfile Information: View user profile details such as display name, email.",
        repository: "https://github.com/Colledev/oAuth-Javascript",
        status: "Completed",
    },
];
