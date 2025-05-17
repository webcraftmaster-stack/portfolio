const portfolio = {
    subTitle: "Recent Work",
    title: "Look at my portfolio and give me your feedback",
    counter: 276,
    counterDesc: "Completed Project",
    rating: 94,
    ratingDesc: "Positive Rating",
    projects: [
        {
            url: 'e-shop',              // Project Title
            type: "Components",             
            title: "UI Design",         // Project Name on Frontend
            desc: "This project is an implementation of a complete e-commerce website, built with Next.js, Tailwind CSS and payment integration using Stripe. The goal is to create a modern, responsive and easy-to-use online shopping platform.This project is an implementation of a complete e-commerce website, built with Next.js, Tailwind CSS and payment integration using Stripe. The goal is to create a modern, responsive and easy-to-use online shopping platform.",
            img: "/img/projects/e-shop/home.png",
            client: "Validthemes",
            projectType: "Website Growth",
            date: "25 February, 2023",
            address: "New York United State",
            bannerImg: "/img/projects/e-shop/banner.png",
            thumbImg: "/img/projects/e-shop/thumb.png",
            print: [
                {
                    name: 'Home',
                    description:
                      'Homepage do site com um banner em forma de sliders que mostra os destaques de produtos existentes na loja. Cada slide destaca as características distintas de cada produto.',
                    img: '/img/projects/e-shop/home.png'
                },
                {
                    name: 'Lista de Produtos',
                    description:
                      'Homepage do site, onde são exibidos todos os produtos da loja. Explorando uma ampla gama de produtos que atendem a diversos gostos e necessidades.',
                    img: '/img/projects/e-shop/home-products.png'
                },
                {
                    name: 'Produto Detalhes',
                    description:
                      'Página de detalhes de um produto, contendo uma descrição do produto, assim como o seu preço e um imagem ilustrativa. Botão de adicionar aos favoritos ou ao carrinho.',
                    img: '/img/projects/e-shop/details.png'
                },
                {
                    name: 'Favoritos',
                    description:
                      'Página de Favoritos, o seu próprio santuário de desejos! Aqui, você tem a oportunidade de manter um registro dos produtos que capturaram o seu coração.',
                    img: '/img/projects/e-shop/favorite.png'
                },
                {
                    name: 'Carrinho',
                    description:
                      'Página do carrinho. Aqui você tem a opção de adicionar a quantidade específica de produtos que deseja, assim como visualizar todos os produtos adicionados ao carrinho e a soma dos valores de todos os produtos.',
                    img: '/img/projects/e-shop/cart.png'
                },
                {
                    name: 'Checkout',
                    description:
                      'Página com o formulário de pagamentos da plataforma stripe.',
                    img: '/img/projects/e-shop/stripe.png'
                },
                {
                    name: 'Sucesso',
                    description: 'Página de sucesso, mostra as imagens dos produtos que a pessoa compro assim como o nome dela e a quantidade de produtos comprados.',
                    img: '/img/projects/e-shop/success.png'
                }
            ]
        },
        {
            url: 'whatsapp',              // Project Title
            type: "Creative",             
            title: "Gaming Apps",         // Project Name on Frontend
            desc: "Clone of WhatsApp web, using ReactJs and Styled Components for styling and Firebase and its features such as AUTH for user authentication and FIRESTORE to store the conversations of each registered person. With the dark mode option to change the theme and thus have a pleasant interface.",
            img: "/img/projects/whatsapp/login.png",
            client: "Validthemes",
            projectType: "Website Growth",
            date: "25 February, 2024",
            address: "New York United State",
            bannerImg: "/img/projects/whatsapp/chat.png",
            thumbImg: "/img/projects/whatsapp/new-chat.png",
            print: [
                {
                  name: 'Login',
                  description:
                    'Página de login com a opção de conectar pelo google ou pelo github.',
                  img: '/img/projects/whatsapp/login.png'
                },
                {
                  name: 'Home Light',
                  description:
                    'Página de início, após o usuário se autenticar, onde exibe uma mensagem de Boas-vindas, e no canto esquerdo uma lista de contatos.',
                  img: '/img/projects/whatsapp/home-light.png'
                },
                {
                  name: 'Home Dark',
                  description: 'Página inicial em sua versão dark mode.',
                  img: '/img/projects/whatsapp/home-dark.png'
                },
                {
                  name: 'Chat',
                  description:
                    'Página de chat exibe a informações de um chat especifico mostrando as mensagens enviadas por você e aquelas respondidas pelo outro contato.',
                  img: '/img/projects/whatsapp/chat.png'
                },
                {
                  name: 'Chat Emoji',
                  description: 'Opção de escolher um emoji.',
                  img: '/img/projects/whatsapp/chat-emoji.png'
                },
                {
                  name: 'Novo Chat',
                  description: 'Aba com uma lista contendo a opção de escolha de um novo chat.',
                  img: '/img/projects/whatsapp/new-chat.png'
                }
            ]
        },
        {
            url: 'Turtle Movie',              // Project Title
            type: "Business",             
            title: "Business Apps",         // Project Name on Frontend
            desc: "Clone of WhatsApp web, using ReactJs and Styled Components for styling and Firebase and its features such as AUTH for user authentication and FIRESTORE to store the conversations of each registered person. With the dark mode option to change the theme and thus have a pleasant interface.",
            img: "/img/projects/turtlemovie/turtle.png",
            client: "Validthemes",
            projectType: "Website Growth",
            date: "25 February, 2024",
            address: "New York United State",
            bannerImg: "/img/projects/turtlemovie/detail-home.png",
            thumbImg: "/img/projects/turtlemovie/series-popular.png",
            print: [
                {
                  name: 'Home',
                  description:
                    'Homepage do site, onde são exibidos os filmes e series mais populares da semana.',
                  img: '/projects/turtlemovie/turtle-movie.png'
                },
                {
                  name: 'Filmes Populares',
                  description:
                    'Página que tem os filmes mais populares, assim como aqueles com a maior nota de todos os tempos.',
                  img: '/projects/turtlemovie/movie-popular.png'
                },
                {
                  name: 'Séries Populares',
                  description:
                    'Página que contem as séries mais populares, assim como aqueles com a maior nota de todos os tempos.',
                  img: '/projects/turtlemovie/series-popular.png'
                },
                {
                  name: 'Pagina Detalhes',
                  description:
                    'Página que contem os detalhes de um filme/serie especifico. Como a data de lançamento, a duração (no caso de filmes), a produção, o idioma e o país de origem. ',
                  img: '/projects/turtlemovie/detail-home.png'
                },
                {
                  name: 'Detalhes Atores',
                  description:
                    'Página que contem os detalhes dos personagens assim como a opção de ver a ficha técnica de cada pessoa específica.',
                  img: '/projects/turtlemovie/detail-elenco.png'
                },
                {
                  name: 'Detalhes Video',
                  description: 'Pagina que contem o trailer do filme/serie especifico',
                  img: '/projects/turtlemovie/detail-video.png'
                },
                {
                  name: 'Atores Populares',
                  description:
                    'Explore também a lista de atores populares e descubra quais filmes e séries eles já participaram.',
                  img: '/projects/turtlemovie/peoples.png'
                },
                {
                  name: 'Atores Detalhes',
                  description:
                    'Página que contem os detalhes dos personagens assim como a ficha técnica de cada pessoa específica. Você poderá acompanhar a carreira de seus atores favoritos e encontrar novas obras para assistir.',
                  img: '/projects/turtlemovie/detail-people.png'
                }
            ]
        },
        {
            url: 'whatsapp',              // Project Title
            type: "Creative",             
            title: "Gaming Apps",         // Project Name on Frontend
            desc: "Clone of WhatsApp web, using ReactJs and Styled Components for styling and Firebase and its features such as AUTH for user authentication and FIRESTORE to store the conversations of each registered person. With the dark mode option to change the theme and thus have a pleasant interface.",
            img: "/img/projects/whatsapp/login.png",
            client: "Validthemes",
            projectType: "Website Growth",
            date: "25 February, 2024",
            address: "New York United State",
            bannerImg: "/img/projects/whatsapp/chat.png",
            thumbImg: "/img/projects/whatsapp/new-chat.png",
            print: [
                {
                  name: 'Login',
                  description:
                    'Página de login com a opção de conectar pelo google ou pelo github.',
                  img: '/img/projects/whatsapp/login.png'
                },
                {
                  name: 'Home Light',
                  description:
                    'Página de início, após o usuário se autenticar, onde exibe uma mensagem de Boas-vindas, e no canto esquerdo uma lista de contatos.',
                  img: '/img/projects/whatsapp/home-light.png'
                },
                {
                  name: 'Home Dark',
                  description: 'Página inicial em sua versão dark mode.',
                  img: '/img/projects/whatsapp/home-dark.png'
                },
                {
                  name: 'Chat',
                  description:
                    'Página de chat exibe a informações de um chat especifico mostrando as mensagens enviadas por você e aquelas respondidas pelo outro contato.',
                  img: '/img/projects/whatsapp/chat.png'
                },
                {
                  name: 'Chat Emoji',
                  description: 'Opção de escolher um emoji.',
                  img: '/img/projects/whatsapp/chat-emoji.png'
                },
                {
                  name: 'Novo Chat',
                  description: 'Aba com uma lista contendo a opção de escolha de um novo chat.',
                  img: '/img/projects/whatsapp/new-chat.png'
                }
            ]
        },
        {
            url: 'whatsapp',              // Project Title
            type: "Creative",             
            title: "Gaming Apps",         // Project Name on Frontend
            desc: "Clone of WhatsApp web, using ReactJs and Styled Components for styling and Firebase and its features such as AUTH for user authentication and FIRESTORE to store the conversations of each registered person. With the dark mode option to change the theme and thus have a pleasant interface.",
            img: "/img/projects/whatsapp/login.png",
            client: "Validthemes",
            projectType: "Website Growth",
            date: "25 February, 2024",
            address: "New York United State",
            bannerImg: "/img/projects/whatsapp/chat.png",
            thumbImg: "/img/projects/whatsapp/new-chat.png",
            print: [
                {
                  name: 'Login',
                  description:
                    'Página de login com a opção de conectar pelo google ou pelo github.',
                  img: '/img/projects/whatsapp/login.png'
                },
                {
                  name: 'Home Light',
                  description:
                    'Página de início, após o usuário se autenticar, onde exibe uma mensagem de Boas-vindas, e no canto esquerdo uma lista de contatos.',
                  img: '/img/projects/whatsapp/home-light.png'
                },
                {
                  name: 'Home Dark',
                  description: 'Página inicial em sua versão dark mode.',
                  img: '/img/projects/whatsapp/home-dark.png'
                },
                {
                  name: 'Chat',
                  description:
                    'Página de chat exibe a informações de um chat especifico mostrando as mensagens enviadas por você e aquelas respondidas pelo outro contato.',
                  img: '/img/projects/whatsapp/chat.png'
                },
                {
                  name: 'Chat Emoji',
                  description: 'Opção de escolher um emoji.',
                  img: '/img/projects/whatsapp/chat-emoji.png'
                },
                {
                  name: 'Novo Chat',
                  description: 'Aba com uma lista contendo a opção de escolha de um novo chat.',
                  img: '/img/projects/whatsapp/new-chat.png'
                }
            ]
        },
        {
            url: 'whatsapp',              // Project Title
            type: "Creative",             
            title: "Gaming Apps",         // Project Name on Frontend
            desc: "Clone of WhatsApp web, using ReactJs and Styled Components for styling and Firebase and its features such as AUTH for user authentication and FIRESTORE to store the conversations of each registered person. With the dark mode option to change the theme and thus have a pleasant interface.",
            img: "/img/projects/whatsapp/login.png",
            client: "Validthemes",
            projectType: "Website Growth",
            date: "25 February, 2024",
            address: "New York United State",
            bannerImg: "/img/projects/whatsapp/chat.png",
            thumbImg: "/img/projects/whatsapp/new-chat.png",
            print: [
                {
                  name: 'Login',
                  description:
                    'Página de login com a opção de conectar pelo google ou pelo github.',
                  img: '/img/projects/whatsapp/login.png'
                },
                {
                  name: 'Home Light',
                  description:
                    'Página de início, após o usuário se autenticar, onde exibe uma mensagem de Boas-vindas, e no canto esquerdo uma lista de contatos.',
                  img: '/img/projects/whatsapp/home-light.png'
                },
                {
                  name: 'Home Dark',
                  description: 'Página inicial em sua versão dark mode.',
                  img: '/img/projects/whatsapp/home-dark.png'
                },
                {
                  name: 'Chat',
                  description:
                    'Página de chat exibe a informações de um chat especifico mostrando as mensagens enviadas por você e aquelas respondidas pelo outro contato.',
                  img: '/img/projects/whatsapp/chat.png'
                },
                {
                  name: 'Chat Emoji',
                  description: 'Opção de escolher um emoji.',
                  img: '/img/projects/whatsapp/chat-emoji.png'
                },
                {
                  name: 'Novo Chat',
                  description: 'Aba com uma lista contendo a opção de escolha de um novo chat.',
                  img: '/img/projects/whatsapp/new-chat.png'
                }
            ]
        }
    ]
}

export default portfolio