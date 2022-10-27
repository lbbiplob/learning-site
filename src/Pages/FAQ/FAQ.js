import React from 'react';

const FAQ = () => {
    return (
      <div className='w-4/6 mx-auto mt-16'>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. What is graphic design and what does it include?
          </div>
          <div className="collapse-content">
            <p>
              Graphic design is a design process that combines text and graphics
              in a way that is intended to communicate a specific message.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            2. Where is graphic design used?
          </div>
          <div className="collapse-content">
            <p>
              You will find graphic design in company logos, printed materials
              like brochures, posters, signs, greeting cards, postcards,
              business cards, billboards and ads. Advances in technology have
              brought us the digital environment complete with websites, online
              ads, virtual brochures and presentations, and so very much more.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            3. What do graphic designers use to create these designs?
          </div>
          <div className="collapse-content">
            <p>
              Graphic designers can use hand-illustrated designs as well as
              computer-aided designs thanks to a wide range of software with
              nearly endless digital design tools. The availability of software
              like Adobe Illustrator and Photoshop have become staples of the
              graphic designer.
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            4. What can a graphic designer do that I can’t do?
          </div>
          <div className="collapse-content">
            <p>
              A graphic designer does more than just put their creative skills
              to work. Though most graphic designers are intuitively creative
              already, they have generally spent time studying numerous design
              principles. It’s vital to understand how to use design elements to
              transmit the required messages and values as well as evoke a
              certain feeling in the viewer.{" "}
            </p>
          </div>
        </div>
        <div
          tabIndex={4}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            5. What else does a graphic designer accomplish as part of the work
            they produce for a client?
          </div>
          <div className="collapse-content">
            <p>
              Besides turning their client’s vision, brand image and value
              proposition into a graphic display, a designer will undertake many
              specialty tasks as part of a graphic design project. The specialty
              tasks include collaborating on the concept (usually with a team),
              attending meetings about the project, paying attention to what
              customers are clicking on, doing presentations that explain the
              various potential designs, revising designs, and preparing asset
              files for others on the team and for client use.
            </p>
          </div>
        </div>
        <div
          tabIndex={5}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            6. How can I work with a graphic designer and stay on budget?
          </div>
          <div className="collapse-content">
            <p>
              There are many ways to work with a graphic designer. Partnership
              options include working through an agency, using a platform like
              99designs, or hiring them directly. However, you will want to be
              prepared to communicate clearly and often about what you want from
              the graphic designer. The more specific you can be when you fill
              out your request the more likely the final product will reflect
              your vision. Communicating clearly and minimizing revisions will
              hold down your expenses. Most graphic designers include one or two
              rounds of changes in their project price.
            </p>
          </div>
        </div>
      </div>
    );
};

export default FAQ;