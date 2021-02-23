import React from "react";
import { Redirect } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { articlePost as Features } from "components/features/VerticalWithAlternateImageAndText.js";
import postlists from "../posts.json";
import eventslists from "../events.json";
import paperslists from "../papers.json";
import bachelorslists from "../bachelors.json";
import phdslists from "../phds.json";
import courseslists from "../courses.json";
import peoplelists from "../people.json";

import ScrollTop from "components/misc/ScrollTop";
// import styled from "styled-components";
// import tw from "twin.macro";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

// const PrimaryButton = styled(PrimaryButtonBase)((props) => [
//   tw`inline-block mx-auto mt-8 text-sm md:mt-8 md:mx-0`,
//   props.buttonRounded && tw`rounded-full`,
// ]);
export default (props) => {
  const postId = props.match.params.id;
  console.log(postId, typeof postId);
  const validId = parseInt(postId);
  if (!validId) {
    console.log("id notvalid", typeof validId);
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlists.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};
export const peopleProfiles = (props) => {
  const postId = props.match.params.id;
  const validId = postId.trim();
  if (!validId) {
    console.log("id notvalid", typeof validId);
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  peoplelists.forEach((post, i) => {
    console.log(validId, post.id.trim());
    console.log(typeof validId, typeof post.id);
    console.log(validId === post.id.trim());
    if (validId === post.id.trim()) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    console.log("Post does not exist");
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};

export const eventsPosts = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  eventslists.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};

export const paperPosts = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  paperslists.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};

export const coursesPosts = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  courseslists.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.description = post.description
        ? post.description
        : "No description given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};

export const bachelorsPosts = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  bachelorslists.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.description = post.description
        ? post.description
        : "No description given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};

export const phdsPosts = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  phdslists.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.description = post.description
        ? post.description
        : "No description given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <AnimationRevealPage>
      <ScrollTop />
      <Features {...fetchedPost} />
    </AnimationRevealPage>
  );
};
