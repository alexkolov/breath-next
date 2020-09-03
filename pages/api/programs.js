import { phases } from '../../data/programs';

export default (req, res) => {
  res.statusCode = 200;
  res.json([{
    name: 'Standard',
    phases
  }]);
}
