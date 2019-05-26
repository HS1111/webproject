
import Login from './components/Login'
import Home from './components/Home'
import Evaluation from './components/Evaluation'
import BookCase from './components/BookCase'
import Me from './components/Me'
import Details from './components/Details'
import HotList from './components/HotList'


export const routes = [

	//{path:'/',name:'login',component:Login},
	{path:'/',component:Home},
	{path:'/evaluation',name:'evaluation',component:Evaluation},
	{path:'/bookcase',name:'bookcase',component:BookCase},
	{path:'/me',name:'me',component:Me},
	{path:'/details',name:'details',component:Details},
	{path:'/hotlist',name:'hotlist',component:HotList},
	{path:'*',redirect:'/'},
]