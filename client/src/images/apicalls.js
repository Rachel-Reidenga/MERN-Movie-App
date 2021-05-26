import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://imdb-api.com/en/API/Images/k_ff1514nf/{id}/Short';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default myComponent;

using System.Collections.Generic;
 
namespace IMDbApiLib.Models
{
    public class ImageData
    {
        public string IMDbId { get; set; }
        public string Title { get; set; }
        public string FullTitle { get; set; }
        public string Type { get; set; }
        public string Year { get; set; }
 
        public List<ImageDataDetail> Items { get; set; }
 
        public string ErrorMessage { get; set; }
    }
 
    public class ImageDataDetail
    {
        public string Title { get; set; }
        public string Image { get; set; }
    }
}
