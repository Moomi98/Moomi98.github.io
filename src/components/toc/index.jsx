import styles from './index.module.css'
import React, { useEffect, useState } from 'react'
const TOC = ({ contents }) => {
  const [tocs, setTocs] = useState([])

  useEffect(() => {
    const posts = contents[3].props.html
    const hrefReg = /href=(".*?")/g
    const labelReg = /aria-label=(".*?")/g
    const postArr = posts.split('<')

    const result = postArr.filter(post => {
      const attrs = post.split(' ')
      return attrs[0] === 'a'
    })

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
          <div key={index}>
            <div>{toc[0]}</div>
            <div>{toc[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TOC
