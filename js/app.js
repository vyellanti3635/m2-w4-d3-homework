// ===== Food Blog – VUE application =====

var app = new Vue({
    el: '#app',

    data: {
        selectedAuthor: null,

        navLinks: [
            { label: 'Home', href: '#' },
            { label: 'Recipes', href: '#' },
            { label: 'Lifestyles', href: '#' },
            { label: 'Videos', href: '#' },
            { label: 'About', href: '#' }
        ],

        blog: {
            title: 'Food Blog',
            commentsHeading: 'Comments',
            replyLabel: 'REPLY',
            footer: '© Copyright FOOD BLOG',
            profileImage: 'images/profile.png',
            photo: {
                src: 'images/chili.jpg',
                alt: 'White Chicken Chili'
            }
        },

        posts: [
            {
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                level: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
                comment: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
            },
            {
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                level: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
                comment: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!'
            },
            {
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                level: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
                comment: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
            },
            {
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                level: 'Novice',
                bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I’m a food whore! Invite me over for dinner and I’ll be there!',
                comment: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
            }
        ]
    },

    methods: {
        showAuthor: function (post) {
            this.selectedAuthor = post;
        },
        closeAuthor: function () {
            this.selectedAuthor = null;
        }
    },

    components: {
        // Local component: Bootstrap 4 navbar built from the links passed in as a prop
        'main-nav': {
            props: ['links'],
            template:
                '<nav class="navbar navbar-expand-md navbar-dark">' +
                '  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mainNav"' +
                '          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">' +
                '    <span class="navbar-toggler-icon"></span>' +
                '  </button>' +
                '  <div class="collapse navbar-collapse justify-content-md-end" id="mainNav">' +
                '    <ul class="navbar-nav">' +
                '      <li class="nav-item" v-for="link in links" v-bind:key="link.label">' +
                '        <a class="nav-link" v-bind:href="link.href">{{ link.label }}</a>' +
                '      </li>' +
                '    </ul>' +
                '  </div>' +
                '</nav>'
        }
    }
});
