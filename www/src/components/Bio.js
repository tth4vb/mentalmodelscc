import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <p>
      Written by <strong>{config.userName}</strong>.
      {` `}
    </p>
  </>
)

export default Bio
