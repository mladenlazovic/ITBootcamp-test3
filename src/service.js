import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'
const COMPANY_INFO = '/company'
const STARLINKS = '/starlink'
const NEXT_LAUNCH = '/launches/next'

export const getCompany = () => axios.get(`${BASE_URL}${COMPANY_INFO}`)
export const getStarlinks = () => axios.get(`${BASE_URL}${STARLINKS}`)
export const getNextLaunch = () => axios.get(`${BASE_URL}${NEXT_LAUNCH}`)