import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ArticlePage from './ArticlePage'
import CardApartamentPage from './CardApartamentPage'
import CardCommercePage from './CardCommercePage'
import CatalogApartamentsPage from './CatalogApartamentsPage'
import CatalogPage from './CatalogPage'
import ClientPage from './ClientPage'
import CommonAreasPage from './CommonAreasPage'
import CommunicationsPage from './CommunicationsPage'
import HouseTerritoryPage from './HouseTerritoryPage'
import LarderPage from './LarderPage'
import MainPage from './MainPage'
import NewHomePage from './NewHomePage'
import NewsPage from './NewsPage'
import OptionsPage from './OptionsPage'
import ParkingPage from './ParkingPage'
import ProjectsPage from './ProjectsPage'
import StandartsPage from './StandartsPage'
import TechnologyPage from './TechnologyPage'

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/options" element={<OptionsPage />} />
      <Route path="/card-apartament" element={<CardApartamentPage />} />
      <Route path="/card-commerce" element={<CardCommercePage />} />
      <Route path="/catalog-apartaments" element={<CatalogApartamentsPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/common-areas" element={<CommonAreasPage />} />
      <Route path="/communications" element={<CommunicationsPage />} />
      <Route path="/territory" element={<HouseTerritoryPage />} />
      <Route path="/larder" element={<LarderPage />} />
      <Route path="/new-home" element={<NewHomePage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/parking" element={<ParkingPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/standarts" element={<StandartsPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/client" element={<ClientPage />} />
    </Routes>
  )
}
