import styles from './index.module.css'
import React, { useEffect, useState } from 'react'
const TOC = ({ contents }) => {
  const [tocs, setTocs] = useState([])

  useEffect(() => {
    console.log(contents)
    const posts = contents[3].props.html
    const aReg = /<a(.*?)>/g
    const hrefReg = /href=(".*?")/g
    const labelReg = /aria-label=(".*?")/g
    const result = posts.match(aReg)

    result.forEach(attrs => {
      const hrefResult = attrs
        .match(hrefReg)[0]
        .split('=')[1]
        .replace(/"/g, '')
      const labelResult = attrs
        .match(labelReg)[0]
        .split('=')[1]
        .replace(/"/g, '')
      console.log(tocs)
      setTocs([...tocs, [hrefResult, labelResult]])
    })

    console.log(result)
  }, [])

  return (
    <div className={styles.navigator}>
      <div>
        {tocs.map((toc, index) => (
          <a key={index} href={toc[0]}>
            {toc[1]}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TOC
