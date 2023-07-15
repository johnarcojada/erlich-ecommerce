import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Trending/TrendingTags/_trendingTags.scss';
import Tag from 'components/Tag';

const className = BEMHelper('trending-tags-section');

const TrendingTags: React.FC = () => {
  const tags = [
    '#ThanksGiving',
    '#NewYears',
    '#Knitted',
    '#Pajamas',
    '#WFH',
    '#FallFasion',
  ];

  return (
    <div {...className('')}>
      <div {...className('wrapper')}>
        {tags.map((tags, index) => (
          <div key={index} className="tag-wrapper">
            <Tag>{tags}</Tag>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTags;
