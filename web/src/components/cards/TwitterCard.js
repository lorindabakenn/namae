import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { Card } from '../Card'
import { DedicatedAvailability } from '../Availability'
import { capitalize } from '../../util/text'

export default function TwitterCard({ name }) {
  return (
    <Card
      title="Twitter"
      key={name}
      nameList={[name]}
      alternativeList={[
        `${capitalize(name)}HQ`,
        `${name.toLowerCase()}app`,
        `${name.toLowerCase()}-support`,
        `${capitalize(name)}Team`,
      ]}>
      {(name) => (
        <DedicatedAvailability
          name={name}
          service="twitter"
          link={`https://twitter.com/${name}`}
          prefix="twitter.com/"
          icon={<FaTwitter />}
        />
      )}
    </Card>
  )
}