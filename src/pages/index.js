import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Layout } from "../components/MyLayout"
import { Subtitle } from "../components/Section/Subtitle"
import { Title } from "../components/Section/Title"
import { Section } from "../components/Section"

import Grid from '@material-ui/core/Grid';

const IndexPage = () => (
  <Layout>
    <div style={{ height: '100%', position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1441484295955-db07de1fdbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, zIndex: 2 }} />
      <div style={{ width: 200, height: 200, margin: 'auto', position: 'relative', display: 'block', transform: 'translateY(-50%)', top: '50%', zIndex: 3 }}>
        <img src={'https://media.licdn.com/dms/image/C4E03AQG5PIgxg5BiyQ/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=3WivVtvV6hE61kHXYv87Qt9dprU7z5GcFwsm82P5AG4'} style={{ width: 200, height: 200, borderRadius: '50%', display: 'block', margin: 'auto' }} />
        <div className={'spinner'} style={{ border: '5px solid blue', position: 'absolute', top: -5, left: -5, width: '100%', height: '100%', borderLeftColor: 'transparent', borderTopColor: 'rgba(255,255,255,0.3)', borderRightColor: 'transparent', borderBottomColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'block' }} />
      </div>
    </div>
    <div style={{ backgroundColor: 'rgba(255,255,255,1)' }} >
      <Section title={'Información'} subtitle={'Sobre mi'}>
        <Grid container={true}>
          <Grid item={true} xs={4}>
            <img style={{ width: '100%', margin: 'auto', display: 'block' }} src={'https://instagram.fscl10-1.fna.fbcdn.net/vp/09a1deec075aa017aba4d6231f617549/5E28FDDE/t51.2885-15/e35/66402506_938234706520411_4423553201685325107_n.jpg?_nc_ht=instagram.fscl10-1.fna.fbcdn.net&_nc_cat=107'} />
          </Grid>
          <Grid item={true} xs={8}></Grid>
        </Grid>
      </Section>
    </div>
  </Layout>
)

{/* <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout> */}

export default IndexPage
