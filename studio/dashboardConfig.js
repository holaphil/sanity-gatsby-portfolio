export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ee05da3c963571f60f0ef6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nxvz6fz8',
                  apiId: '03565884-ceac-48b7-a851-17a6d3ae45a5'
                },
                {
                  buildHookId: '60ee05dac9ff256ed2b9f0d5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ycnst217',
                  apiId: 'fc6725a9-c1e4-4716-9399-a0538af4c831'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/holaphil/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ycnst217.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
