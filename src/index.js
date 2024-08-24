import React, { useState } from "react";
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.blockEditor;
const { Button } = wp.components;

registerBlockType("hero-block/hero-block", {
  title: "Hero Block",
  description:
    "Block to create a hero section with a title on the left side and an image on the right side. A description and social platforms on the bottom.",
  icon: "superhero",
  category: "layout",
  attributes: {
    isChecked: {
      type: "boolean",
      default: false,
    },
    heroTitle: {
      type: "string",
    },
    heroTitle2: {
      type: "string",
    },
    heroContent: {
      type: "html",
    },
    imageUrl: {
      type: "string",
    },
    linkedinUrl: {
      type: "string",
    },
    codepenUrl: {
      type: "string",
    },
    githubUrl: {
      type: "string",
    },
    dribbbleUrl: {
      type: "string",
    },
    resumeUrl: {
      type: "string",
    },
  },
  edit({ attributes, setAttributes }) {
    const [isChecked, setIsChecked] = useState(attributes.isChecked);
    const {
      heroTitle,
      heroTitle2,
      heroContent,
      imageUrl,
      linkedinUrl,
      codepenUrl,
      githubUrl,
      dribbbleUrl,
      resumeUrl,
    } = attributes;

    const handleCheckboxChange = (event) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      setAttributes({ isChecked: checked });
    };

    function updateHeroTitle(event) {
      setAttributes({ heroTitle: event.target.value });
    }

    function updateHeroTitle2(event) {
      setAttributes({ heroTitle2: event.target.value });
    }

    const handleContentChange = (heroContent) => {
      setAttributes({ heroContent: heroContent });
    };

    const handleImageSelect = (media) => {
      setAttributes({ imageUrl: media.url });
    };

    const handleLinkedinUrl = (event) => {
      setAttributes({ linkedinUrl: event.target.value });
    };

    const handleCodepenUrl = (event) => {
      setAttributes({ codepenUrl: event.target.value });
    };

    const handleGithubUrl = (event) => {
      setAttributes({ githubUrl: event.target.value });
    };

    const handleDribbbleUrl = (event) => {
      setAttributes({ dribbbleUrl: event.target.value });
    };

    const handleResumeUrl = (event) => {
      setAttributes({ resumeUrl: event.target.value });
    };

    return (
      <div className="form-container">
        <header className="form-header">
          <img class="form-logo" src="/images/daniel-morales-logo.svg" alt="" />
          <h1>Hero Block</h1>
        </header>
        <div className="form-group">
          <label htmlFor="heroTitleLines">
            Does the Hero Title have multiple lines?
          </label>
          <input
            id="heroTitleLines"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="heroTitle">Hero Title:</label>
          <input
            id="heroTitle"
            value={heroTitle}
            onChange={updateHeroTitle}
            type="text"
          />
        </div>
        {attributes.isChecked && (
          <div class="form-group">
            <label htmlFor="heroTitle2">Hero Title 2:</label>
            <input
              id="heroTitle2"
              value={heroTitle2}
              onChange={updateHeroTitle2}
              type="text"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="heroContent">Hero Content:</label>
          <RichText
            id="heroContent"
            value={heroContent}
            onChange={handleContentChange}
            placeholder="Enter hero content..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="heroImage">Hero Image:</label>
          <MediaUpload
            onSelect={handleImageSelect}
            allowedTypes={["image"]}
            render={({ open }) => (
              <Button onClick={open}>
                {imageUrl ? (
                  <img src={imageUrl} class="hero-home" />
                ) : (
                  "Select Image"
                )}
              </Button>
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedinUrl">Linkedin URL:</label>
          <input
            id="linkedinUrl"
            value={linkedinUrl}
            onChange={handleLinkedinUrl}
            type="url"
            pattern="https://.*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="codepenUrl">Codepen URL:</label>
          <input
            id="codepenUrl"
            value={codepenUrl}
            onChange={handleCodepenUrl}
            type="url"
            pattern="https://.*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="githubUrl">Github URL:</label>
          <input
            id="githubUrl"
            value={githubUrl}
            onChange={handleGithubUrl}
            type="url"
            pattern="https://.*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dribbbleUrl">Dribbble URL:</label>
          <input
            id="dribbbleUrl"
            value={dribbbleUrl}
            onChange={handleDribbbleUrl}
            type="url"
            pattern="https://.*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumeUrl">Resume URL</label>
          <input
            id="resumeURL"
            value={resumeUrl}
            onChange={handleResumeUrl}
            type="text"
          />
        </div>
      </div>
    );
  },
  save({ attributes }) {
    return (
      <section class="hero">
        <div class="hero__content">
          <div class="hero__inner">
            <div class="hero__text">
              <h1>
                <span class="block--xs">{attributes.heroTitle}</span>
                {attributes.isChecked && (
                  <span class="block--xs">{attributes.heroTitle2}</span>
                )}
              </h1>
            </div>
            <div class="hero__image">
              {attributes.imageUrl && (
                <img src={attributes.imageUrl} class="hero-home" />
              )}
            </div>
          </div>
          <RichText.Content tagName="p" value={attributes.heroContent} />
        </div>
        <nav class="hero__nav-wrapper">
          <ul class="hero__nav">
            {attributes.linkedinUrl && (
              <li class="hero__item">
                <a
                  href={attributes.linkedinUrl}
                  class="hero__link hero__link--linkedin"
                  title="linkedin"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">linkedin</span>
                </a>
              </li>
            )}
            {attributes.codepenUrl && (
              <li class="hero__item">
                <a
                  href={attributes.codepenUrl}
                  class="hero__link hero__link--codepen"
                  title="codepen"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">codepen</span>
                </a>
              </li>
            )}
            {attributes.githubUrl && (
              <li class="hero__item">
                <a
                  href={attributes.githubUrl}
                  class="hero__link hero__link--github"
                  title="github"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">github</span>
                </a>
              </li>
            )}
            {attributes.dribbbleUrl && (
              <li class="hero__item">
                <a
                  href={attributes.dribbbleUrl}
                  class="hero__link hero__link--dribbble"
                  title="dribbble"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="sr-only">dribbble</span>
                </a>
              </li>
            )}
            {attributes.resumeUrl && (
              <li class="hero__item">
                <a
                  href={attributes.resumeUrl}
                  class="btn btn--primary btn--icon btn--icon--resume"
                  title="Resume"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Resume
                </a>
              </li>
            )}
          </ul>
        </nav>
      </section>
    );
  },
});
