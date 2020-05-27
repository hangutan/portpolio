import Introduce from './pages/Introduce/Introduce';
import Skill from './pages/Skill/Skill';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contacts/Contacts';

export const Portfolio =[
    {
        path:'/',
        exact:true,
        component:Introduce
    },
    {
        path:'/skills',
        exact:false,
        component:Skill
    },
    {
        path:'/projects',
        exact:false,
        component:Projects
    },
    {
        path:'/contact',
        exact:false,
        component:Contact
    }
]