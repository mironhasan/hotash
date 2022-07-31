const menu = {
    user: [
        { href: "#", icon: "person",      text: "my account" },
        { href: "#", icon: "privacy_tip", text: "reset password" },
        { href: "#", icon: "lock",        text: "logout" },
    ],
    sidebar: [
        {
            title: "main menu",
            menu: [
                { 
                    icon: "dashboard", 
                    text: "dashboard", 
                    badge: { text: "hot", variant: "red" },
                    submenu: [
                        { href: "#", text: "01 dropdown" },
                        { href: "#", text: "02 dropdown" },
                        { href: "#", text: "03 dropdown" },
                    ],
                },
                { 
                    icon: "lock", 
                    text: "authentication", 
                    badge: { text: "new", variant: "blue" },
                    submenu: [
                        { href: "#", text: "login" },
                        { href: "#", text: "registration" },
                        { href: "#", text: "reset password" },
                    ],
                },
                { 
                    icon: "pix", 
                    text: "products", 
                },
            ],
        },
    ],
    heroCard: {
        icon: "more_vert",
        position: "top",
        dropdown: [
            { icon: "history", text: "last day" },
            { icon: "history", text: "last week" },
            { icon: "history", text: "last month" },
            { icon: "history", text: "last year" },
        ],
    },
    salesCard: {
        icon: "more_horiz",
        position: "bottom",
        dropdown: [
            { icon: "edit", text: "edit" },
            { icon: "delete", text: "delete" },
            { icon: "download", text: "download" },
        ],
    },
    CommonCard: {
        icon: "more_horiz",
        position: "bottom",
        dropdown: [
            { icon: "edit", text: "edit" },
            { icon: "delete", text: "delete" },
            { icon: "download", text: "download" },
        ],
    },
}

export default menu