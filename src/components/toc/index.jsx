import styles from './index.module.css'
import React, { useEffect, useState } from 'react'
const TOC = ({ contents }) => {
  const [tocs, setTocs] = useState([])

  useEffect(() => {
    console.log(contents[3].props.html)
    const posts = contents[3].props.html
    const aReg = /<a(.*?)>/g
    const hrefReg = /href=(".*?")/g
    const labelReg = /aria-label=(".*?")/g
    const result = posts.match(aReg)

    const tocArr = []

    result.forEach(attrs => {
      const hrefResult = attrs
        .match(hrefReg)[0]
        .split('=')[1]
        .replace(/"/g, '')
      const labelResult = attrs
        .match(labelReg)[0]
        .split('=')[1]
        .replace(/"/g, '')
        .replace('permalink', '')
      console.log(tocs)
      tocArr.push([hrefResult, labelResult])
    })

    setTocs([...tocs, ...tocArr])
    console.log(result)
  }, [])

  return (
    <div className={styles.navigator}>
      {tocs.map((toc, index) => (
        <div style={{ display: 'flex' }}>
          <div className={styles.tocBlock} />
          <a className={styles.tocTag} key={index} href={toc[0]}>
            {toc[1]}
          </a>
        </div>
      ))}
    </div>
  )
}

export default TOC
