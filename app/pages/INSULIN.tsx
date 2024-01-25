import React from 'react'

const INSULIN = () => {
  return (
    <table >
        <thead>
            <tr>
                <th>Dose/Unit</th>
                <th>Date/2024</th>
                <th>Fasting</th>
                <th>+2 H Breakfat</th>
                <th>+2 H Lunch</th>
                <th>+2 H Dinner</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>25</td>
                <td>21 Jan</td>
                <td>249</td>
                <td>-</td>
                <td>241</td>
                <td>268</td>
            </tr><tr>
                <td>30</td>
                <td>22 Jan</td>
                <td>233</td>
                <td>231</td>
                <td>269</td>
                <td>262</td>
            </tr>
            <tr>
                <td>30</td>
                <td>23 Jan</td>
                <td>219</td>
                <td>317</td>
                <td>175</td>
                <td>-</td>
            </tr>
            <tr>
                <td>30</td>
                <td>24 Jan</td>
                <td>199</td>
                <td>290</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
  )
}

export default INSULIN