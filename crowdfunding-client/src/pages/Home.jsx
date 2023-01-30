import React, { useState, useEffect } from 'react'
import DispayCampaigns from '../components/DispayCampaigns'
import { useStateContext } from '../context'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setLoading(true)
    const data = await getCampaigns();
    setCampaigns(data)
    setLoading(false)
  }

  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract])
  return (
    <DispayCampaigns
      title="All Campaigns"
      isLoading={loading}
      campaigns={campaigns}
    />
  )
}

export default Home
