import MainPage from "../pages/mainPage";
import DetailNews from "../pages/detailNews";
import NewsPage from "../pages/newsPage";
import EventsPage from "../pages/eventsPage";
import DetailEvents from "../pages/detailEvents";
import { DirectionPage } from '../pages/directionPage/directionPage';
import { GenerationPage } from '../pages/generationPage/generationPage';
import { StoryPage } from '../pages/storyPage/storyPage';
import SearchPage from "../components/SearchPage";
import {ProminentPage} from "../pages/prominentPage/prominentPage";
import DetailStory from "../pages/storyPage/detailStory";
import {DetailGeneration} from "../pages/generationPage/detailGeneration";
import {DirectionDetail} from "../pages/directionPage/directionDetail";
import {DetailProminent} from "../pages/prominentPage/detailProminent";

export const publicRoutes = [
  { path: '/', component: MainPage },
  { path: '/news', component: NewsPage },
  { path: '/news/:id', component: DetailNews },
  { path: '/events', component: EventsPage },
  { path: '/events/:id', component: DetailEvents },
  { path: '/prominent', component: ProminentPage },
  { path: '/story', component: StoryPage },
  { path: '/generation', component: GenerationPage },
  { path: '/direction', component: DirectionPage },
  { path: '/prominent/:id', component: DetailProminent },
  { path: '/story/:id', component: DetailStory},
  { path: '/generation/:id', component: DetailGeneration },
  { path: '/search', component: SearchPage},
  { path: '/direction/', component: DirectionPage},
  { path: '/direction/:id', component: DirectionDetail},
];
