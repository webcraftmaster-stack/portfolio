import React from 'react'

export default function Preloader() {
  return (
    <div id="preloader">
        <div id="ambrox-preloader" className="ambrox-preloader">
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="M" className="letters-loading">
                        M
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="T" className="letters-loading">
                        T
                    </span>
                    <span data-text-preloader="T" className="letters-loading">
                        T
                    </span>
                    <span data-text-preloader="H" className="letters-loading">
                        H
                    </span>
                    <span data-text-preloader="E" className="letters-loading">
                        E
                    </span>
                    <span data-text-preloader="W" className="letters-loading">
                        W
                    </span>
                </div>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
