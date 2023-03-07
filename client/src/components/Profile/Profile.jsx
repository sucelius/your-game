import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'; 

export default function Profile() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <div>Profile</div>
      <div>Here is Your statistic:
        <div>
          <ul>
            <div>
              <li>
                Your total score is:
              </li>
            </div>
            <div>
              <li>
                Total rigth answers:
              </li>
            </div>
            <div>
              <li>
                <ul>
                  <div>
                    List of the best players:
                    <li>
                      1
                    </li>
                    <li>
                      2
                    </li>
                    <li>
                      3
                    </li>
                  </div>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
