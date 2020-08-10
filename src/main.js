import {createSiteRouteInformationTemplate} from "./view/site-route-information.js";
import {createSiteRouteСostTemplate} from "./view/site-route-cost.js";
import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createSiteFiltersTemplate} from "./view/site-filters.js";
import {createSiteSortingTemplate} from "./view/site-sorting.js";
import {createSiteFormEventTemplate} from "./view/site-form-event.js";
import {createSiteWaypoint} from "./view/site-waypoint.js";


const TASK_COUNT = 3;

const sitePageHeader = document.querySelector(`.page-header`);

const sitePageTripMain = sitePageHeader.querySelector(`.trip-main`);

const siteControls = sitePageHeader.querySelector(`.trip-main__trip-controls`);

const siteControlsHeadlines = siteControls.querySelectorAll(`h2`);

const sitePageMain = document.querySelector(`.page-body__page-main`);

const siteTripEvents = sitePageMain.querySelector(`.trip-events`);


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

let section = document.createElement(`section`);
section.className = `trip-main__trip-info  trip-info`;

sitePageTripMain.insertBefore(section, siteControls);

let newSection = sitePageTripMain.querySelector(`.trip-main__trip-info`);

render(newSection, createSiteRouteInformationTemplate(), `beforeend`);

render(newSection, createSiteRouteСostTemplate(), `beforeend`);

render(siteControlsHeadlines[0], createSiteMenuTemplate(), `afterend`);

render(siteControlsHeadlines[1], createSiteFiltersTemplate(), `afterend`);

render(siteTripEvents, createSiteSortingTemplate(), `beforeend`);

render(siteTripEvents, createSiteFormEventTemplate(), `beforeend`);

let list = document.createElement(`ul`);
list.className = `trip-days`;

siteTripEvents.appendChild(list);

let newList = siteTripEvents.querySelector(`.trip-days`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(newList, createSiteWaypoint(), `beforeend`);
}


