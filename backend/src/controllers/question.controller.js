const Question = require('../models/questions');

// 1) Yeni soru ekle (Admin)
exports.createQuestion = async (req, res) => {
  try {
    const q = new Question(req.body);
    await q.save();
    res.status(201).json(q);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 2) Tüm soruları listele (Admin)
exports.getAllQuestions = async (req, res) => {
  try {
    const list = await Question.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 3) ID ile soru getir
exports.getQuestionById = async (req, res) => {
  try {
    const q = await Question.findById(req.params.id);
    if (!q) return res.status(404).json({ error: 'Soru bulunamadı' });
    res.json(q);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 4) ID ile soru güncelle (Admin)
exports.updateQuestion = async (req, res) => {
  try {
    const q = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!q) return res.status(404).json({ error: 'Soru bulunamadı' });
    res.json(q);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 5) ID ile soru sil (Admin)
exports.deleteQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Soru silindi' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 6) Rastgele sorular getir (öğrenci testi için)
exports.getRandomQuestions = async (req, res) => {
  try {
    const topic = req.query.topic;          // ?topic=Matematik
    const count = parseInt(req.query.count) || 10; // ?count=5
    const match = topic ? { topic } : {};
    const randomList = await Question.aggregate([
      { $match: match },
      { $sample: { size: count } }
    ]);
    res.json(randomList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
