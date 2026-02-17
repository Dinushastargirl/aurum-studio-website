
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Simulate basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    // Mock processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success
    return res.status(200).json({ 
      status: 'success', 
      message: `Thank you ${name}, your booking request has been received.` 
    });
  }

  return res.status(405).json({ status: 'error', message: 'Method not allowed' });
}
