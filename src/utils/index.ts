import { IBiomRoot } from '../data/interfaces';

type TRank =
  | 'strain'
  | 'species'
  | 'genus'
  | 'family'
  | 'order'
  | 'class'
  | 'phylum'
  | 'superkingdom';

const MIN_PERCENT = 0.01;
const LEVEL = 7;
const RANK: TRank = 'strain';

export const convertDataTable = (biomData: IBiomRoot) => {
  const { rows, data } = biomData;
  let index = 0;

  return rows
    .filter(({ metadata }) => metadata.lineage[LEVEL].rank === RANK)
    .map(({ metadata }) => {
      const { lineage } = metadata;

      const rowData = data.slice(index, index + 3);
      index += 3;

      return {
        id: `${lineage[LEVEL].tax_id}`,
        name: lineage[LEVEL].name,
        tax_id: lineage[LEVEL].tax_id,
        relative_abundance:
          rowData[0][2] >= MIN_PERCENT
            ? `${(rowData[0][2] * 100).toFixed(2)}%`
            : '< 0.01%',
        abundance_score: +rowData[1][2].toFixed(2),
        uniqueMatches_frequency: Math.trunc(rowData[2][2]),
      };
    });
};
