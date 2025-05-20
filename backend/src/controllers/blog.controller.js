const Post = require('../models/posts');
const slugify = require('slugify'); // slug oluşturmak için

// 1) Yeni yazı oluştur (Admin)
exports.createPost = async (req, res) => {
  try {
    const { title, content, tags, published } = req.body;
    const slug = slugify(title, { lower: true });
    const post = new Post({ title, slug, content, tags, published, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 2) Tüm yazıları listele (herkese açık, sadece published)
exports.getPublishedPosts = async (req, res) => {
  try {
    const list = await Post.find({ published: true }).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 3) ID veya slug ile tek yazı getir (herkese açık)
exports.getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug, published: true })
                           .populate('author', 'name');
    if (!post) return res.status(404).json({ error: 'Yazı bulunamadı' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 4) ID ile güncelle (Admin)
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ error: 'Yazı bulunamadı' });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 5) ID ile sil (Admin)
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Yazı silindi' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
