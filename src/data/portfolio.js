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
            img: "/img/800x600.png",
            type: "Creative",
            title: "Gaming Apps"
        },
        {
            img: "/img/800x600.png",
            type: "Business",
            title: "Business Apps"
        },
        {
            img: "/img/800x600.png",
            type: "Invest",
            title: "Travel Apps"
        },
        {
            img: "/img/800x600.png",
            type: "Source",
            title: "Lifestyle Apps"
        },
        {
            img: "/img/800x600.png",
            type: "Finance",
            title: "Entertainment Apps"
        }
    ]
}

export default portfolio